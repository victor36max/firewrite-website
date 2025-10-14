"use client";

import { cn, getPlatformDisplayName, trackEvent } from "@/utils";
import { Typography } from "./typography";
import { ParsedAsset, Platform } from "@/types";
import Link from "next/link";
import { LuDownload } from "react-icons/lu";

interface DownloadAssetsProps {
  assets: Record<Platform, ParsedAsset[]>;
}

export const DownloadAssets = ({ assets }: DownloadAssetsProps) => {
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
          return (asset.extension as string).toUpperCase();
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
    <div className="space-y-8">
      {["macos" as const, "windows" as const, "linux" as const].map(
        (platform) => (
          <div className="flex-1" key={platform}>
            <Typography size="heading4" className="font-medium py-5">
              {getPlatformDisplayName(platform)}
            </Typography>
            <div className="border border-muted rounded-lg">
              {assets[platform]
                .sort((a, b) => a.architecture.localeCompare(b.architecture))
                .sort((a, b) => b.extension.localeCompare(a.extension))
                .map((asset, index) => (
                  <Link
                    key={asset.downloadUrl}
                    href={asset.downloadUrl}
                    className={cn(
                      "flex flex-row gap-2 items-center p-4 border-muted justify-between hover:bg-muted-light",
                      index !== 0 && "border-t"
                    )}
                    onClick={() =>
                      trackEvent("download-desktop-app", {
                        platform: asset.platform,
                        architecture: asset.architecture,
                        extension: asset.extension,
                      })
                    }
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
  );
};
