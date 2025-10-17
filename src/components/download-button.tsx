"use client";

import { Architecture, ParsedAsset, Platform } from "@/types";
import { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";
import { LinkButton } from "./button";
import { getPlatformDisplayName, trackEvent } from "@/utils";

interface DownloadButtonProps {
  assets: Record<Platform, ParsedAsset[]>;
}

export const DownloadButton = ({ assets }: DownloadButtonProps) => {
  const [asset, setAsset] = useState<ParsedAsset | null>(null);

  useEffect(() => {
    const uaParser = new UAParser();
    const os = uaParser.getOS();
    const cpu = uaParser.getCPU();

    const platform: Platform | null = (() => {
      switch (os.name) {
        case "macOS":
          return "macos";
        case "Windows":
          return "windows";
        case "Linux":
          return "linux";
        default:
          return null;
      }
    })();

    if (!platform) return;

    const architecture: Architecture = (() => {
      switch (cpu.architecture) {
        case "amd64":
          return "x64";
        case "arm64":
          return "arm64";
        default:
          return "universal";
      }
    })();

    const asset = assets[platform]?.find((asset) => {
      if (platform === "linux") {
        return asset.architecture === architecture && asset.extension === "deb";
      }

      return asset.architecture === architecture;
    });

    if (!asset) return;

    setAsset(asset);
  }, [assets]);

  if (!asset) return null;

  return (
    <LinkButton
      href={asset.downloadUrl}
      variant="primary"
      onClick={() =>
        trackEvent("download-desktop-app", {
          platform: asset.platform,
          architecture: asset.architecture,
          extension: asset.extension,
        })
      }
    >
      Download for {getPlatformDisplayName(asset.platform)}
    </LinkButton>
  );
};
