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
  extension: string;
  downloadUrl: string;
};
