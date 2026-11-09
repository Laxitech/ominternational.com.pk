import fs from "node:fs";
import path from "node:path";

const CAROUSEL_DIR = path.join(
  process.cwd(),
  "public",
  "images",
  "carousel",
);

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".gif",
  ".svg",
]);

/**
 * Lists the images dropped into `public/images/carousel`, sorted naturally by
 * filename (so `slide-2` comes before `slide-10`).
 *
 * Runs at build time because the site uses `output: "export"`. Add or remove
 * images and rebuild to update the carousel.
 *
 * Server-only: import from Server Components, never from client components.
 */
export function getCarouselImages(): string[] {
  try {
    return fs
      .readdirSync(CAROUSEL_DIR)
      .filter((file) => {
        if (file.startsWith(".")) return false;
        return IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase());
      })
      .sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
      )
      .map((file) => `/images/carousel/${encodeURIComponent(file)}`);
  } catch {
    return [];
  }
}
