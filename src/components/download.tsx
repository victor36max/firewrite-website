import { Container } from "@/components/container";
import { Typography } from "@/components/typography";
import { cn, getPlatformDisplayName, trackEvent } from "@/utils";
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
import { DownloadAssets } from "./download-assets";

const getPlatformFromExtension = (extension: string): Platform | null => {
  if (["deb", "AppImage"].includes(extension)) return "linux" as const;
  if (["dmg"].includes(extension)) return "macos" as const;
  if (["exe"].includes(extension)) return "windows" as const;
  return null;
};

const parseAsset = (name: string, downloadUrl: string): ParsedAsset | null => {
  if (name.endsWith(".blockmap") || name.endsWith(".zip")) return null;
  const sanitizedName = name.replace("-setup", "");

  let architecture: Architecture | null = null;
  let extension: Extension | null = null;

  const universalMatches = sanitizedName.match(
    /^.+\-[0-9+]\.[0-9+]\.[0-9+]\-\w+\.(\w+)$/
  );
  if (universalMatches) {
    architecture = "universal";
    extension = universalMatches[1] as Extension;
  } else {
    const withArchitectureMatches = sanitizedName.match(
      /^.+\-[0-9+]\.[0-9+]\.[0-9+]\-\w+\-(.+)\.(\w+)$/
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
    "https://api.github.com/repos/victor36max/firewrite/releases/latest",
    {
      cache: "force-cache",
      next: {
        revalidate: 60 * 5, // 5 minutes
      },
    }
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
        <div className="flex-1">
          <DownloadAssets assets={parsedAssets} />
        </div>
      </Container>
    </section>
  );
};
