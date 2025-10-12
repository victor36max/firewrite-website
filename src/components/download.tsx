import { Container } from "@/components/container";
import { Typography } from "@/components/typography";
import { cn, getPlatformDisplayName } from "@/utils";
import Link from "next/link";
import { LuDownload } from "react-icons/lu";
import {
  Platform,
  ParsedAsset,
  Release,
  Architecture,
  Extension,
} from "@/types";
import { DownloadButton } from "./download-button";
import { LinkButton } from "./button";

const getPlatformFromExtension = (extension: string): Platform | null => {
  if (["deb", "AppImage"].includes(extension)) return "linux" as const;
  if (["dmg"].includes(extension)) return "macos" as const;
  if (["exe"].includes(extension)) return "windows" as const;
  return null;
};

const parseAsset = (name: string, downloadUrl: string): ParsedAsset | null => {
  if (name.endsWith(".blockmap")) return null;
  const sanitizedName = name.replace("-setup", "");

  let architecture: Architecture | null = null;
  let extension: Extension | null = null;

  const universalMatches = sanitizedName.match(
    /^.+\-[0-9+]\.[0-9+]\.[0-9+]\.(.+)$/
  );
  if (universalMatches) {
    architecture = "universal";
    extension = universalMatches[1] as Extension;
  } else {
    const withArchitectureMatches = sanitizedName.match(
      /^.+\-[0-9+]\.[0-9+]\.[0-9+]-(.+)\.(.+)$/
    );
    if (withArchitectureMatches) {
      architecture = withArchitectureMatches[1] as Architecture;
      extension = withArchitectureMatches[2] as Extension;
    }
  }

  if (!architecture || !extension) return null;

  const parsedArchitecture = ["x86_64", "amd64"].includes(architecture)
    ? "x64"
    : (architecture as Architecture);

  const platform = getPlatformFromExtension(extension);
  if (!platform) return null;

  return {
    platform,
    architecture: parsedArchitecture,
    extension: extension as Extension,
    downloadUrl,
  };
};

export const Download = async () => {
  const response = await fetch(
    "https://api.github.com/repos/victor36max/firewrite/releases/latest"
  );
  const data = (await response.json()) as Release;
  const parsedAssets = data.assets
    .map((asset) => parseAsset(asset.name, asset.browser_download_url))
    .filter(Boolean)
    .reduce((acc, asset) => {
      if (asset && asset.platform) {
        acc[asset.platform] = [...(acc[asset.platform] || []), asset];
      }
      return acc;
    }, {} as Record<Platform, ParsedAsset[]>);

  const getAssetDisplayName = (asset: ParsedAsset) => {
    const displayName = (() => {
      switch (asset.extension) {
        case "deb":
          return "Linux .deb";
        case "AppImage":
          return "Linux AppImage";
        case "dmg":
          return "Mac";
        case "exe":
          return "Windows";
        default:
          return asset.extension.toUpperCase();
      }
    })();

    const architectureDisplayName = (() => {
      switch (asset.architecture) {
        case "universal":
          return "Universal";
        default:
          return asset.architecture.toUpperCase();
      }
    })();

    return `${displayName} (${architectureDisplayName})`;
  };

  return (
    <section id="download" className="py-20">
      <Container className="flex flex-col gap-10 md:flex-row md:gap-20">
        <div className="flex-1 space-y-6">
          <LuDownload className="w-8 h-8" />
          <Typography size="heading1" as="h2">
            Download
          </Typography>
          <Typography size="bodyMedium">
            Your feedback builds our roadmap.
          </Typography>
          <div className="flex flex-row gap-4">
            <DownloadButton assets={parsedAssets} />
            <LinkButton
              href="https://discord.gg/XtftTPVWYb"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
            </LinkButton>
          </div>
        </div>
        <div className="space-y-8 flex-1">
          {["macos" as const, "windows" as const, "linux" as const].map(
            (platform) => (
              <div className="flex-1" key={platform}>
                <Typography size="heading4" className="font-medium py-5">
                  {getPlatformDisplayName(platform)}
                </Typography>
                <div className="border border-muted rounded-lg">
                  {parsedAssets[platform]
                    .sort((a, b) =>
                      a.architecture.localeCompare(b.architecture)
                    )
                    .sort((a, b) => b.extension.localeCompare(a.extension))
                    .map((asset, index) => (
                      <Link
                        key={asset.downloadUrl}
                        href={asset.downloadUrl}
                        className={cn(
                          "flex flex-row gap-2 items-center p-4 border-muted justify-between hover:bg-muted-light",
                          index !== 0 && "border-t"
                        )}
                      >
                        <Typography size="bodyMedium" className="font-medium">
                          {getAssetDisplayName(asset)}
                        </Typography>
                        <LuDownload className="w-4 h-4" />
                      </Link>
                    ))}
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};
