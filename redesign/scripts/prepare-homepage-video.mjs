import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const destination = resolve("public/images/homepage-ants.mp4");

if (!existsSync(destination)) {
  const legacyVideo = resolve("../images/for_Git.mp4");

  if (!existsSync(legacyVideo)) {
    throw new Error(
      "Missing public/images/homepage-ants.mp4 and the legacy source video ../images/for_Git.mp4.",
    );
  }

  mkdirSync(dirname(destination), { recursive: true });
  copyFileSync(legacyVideo, destination);
}
