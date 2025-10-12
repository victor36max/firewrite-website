"use client";

import { Architecture, ParsedAsset, Platform } from "@/types";
import { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";
import { LinkButton } from "./button";
import { getPlatformDisplayName } from "@/utils";

interface DownloadButtonProps {
  assets: Record<Platform, ParsedAsset[]>;
}

export const DownloadButton = ({ assets }: DownloadButtonProps) => {
  const [platform, setPlatform] = useState<Platform | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string>("");

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

    const asset = assets[platform].find((asset) => {
      if (platform === "linux") {
        return asset.architecture === architecture && asset.extension === "deb";
      }

      return asset.architecture === architecture;
    });

    if (!asset) return;

    setPlatform(platform);
    setDownloadUrl(asset.downloadUrl);
  }, []);

  if (!platform || !downloadUrl) return null;

  return (
    <LinkButton href={downloadUrl} variant="primary">
      Download for {getPlatformDisplayName(platform)}
    </LinkButton>
  );
};
