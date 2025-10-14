declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "set",
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export type Release = {
  tag_name: string;
  assets: {
    name: string;
    browser_download_url: string;
  }[];
};

export type Platform = "macos" | "windows" | "linux";
export type Architecture = "arm64" | "x64" | "universal";
export type Extension = "deb" | "dmg" | "exe" | "AppImage";

export type ParsedAsset = {
  platform: Platform;
  architecture: Architecture;
  extension: Extension;
  downloadUrl: string;
};

export type TrackingEvents = {
  "download-desktop-app": {
    platform: Platform;
    architecture: Architecture;
    extension: Extension;
  };
};
