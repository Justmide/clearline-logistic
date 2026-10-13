// List of all section images to prefetch smoothly in background after initial page paint
export const CRITICAL_IMAGES_TO_PRELOAD = [
  // Hero slides 2 & 3
  "https://ucarecdn.com/7695c3ac-a033-42f5-bcae-ae85f6af1a91/-/format/auto/-/quality/smart/-/progressive/yes/-/preview/1200x800/",
  "https://ucarecdn.com/d437c39e-f162-4186-9549-0ed6ba1d1e54/-/format/auto/-/quality/smart/-/progressive/yes/-/preview/1200x800/",

  // Project scope tiers (down-page section)
  "https://ucarecdn.com/61e261f3-3d33-4804-8906-02d764d8b680/-/format/auto/-/quality/smart/-/progressive/yes/-/preview/600x450/",
  "https://ucarecdn.com/7695c3ac-a033-42f5-bcae-ae85f6af1a91/-/format/auto/-/quality/smart/-/progressive/yes/-/preview/600x450/",
  "https://ucarecdn.com/d437c39e-f162-4186-9549-0ed6ba1d1e54/-/format/auto/-/quality/smart/-/progressive/yes/-/preview/600x450/",

  // CTA bottom banner
  "https://ucarecdn.com/1b2eb92e-f396-431d-993c-4919b1c168aa/-/format/auto/-/quality/smart/-/progressive/yes/-/preview/1200x800/",

  // Service overview hero
  "https://ucarecdn.com/ac2b2113-e390-4fe3-9e4f-b92978ecda2c/-/format/auto/-/quality/smart/-/progressive/yes/-/preview/1200x800/",
];

const preloadedSet = new Set();

export function preloadImagesInBackground(urls = CRITICAL_IMAGES_TO_PRELOAD) {
  if (typeof window === "undefined") return;

  const preloadNext = (index = 0) => {
    if (index >= urls.length) return;
    const url = urls[index];
    if (!preloadedSet.has(url)) {
      preloadedSet.add(url);
      const img = new Image();
      img.decoding = "async";
      img.onload = () => setTimeout(() => preloadNext(index + 1), 100);
      img.onerror = () => setTimeout(() => preloadNext(index + 1), 50);
      img.src = url;
    } else {
      preloadNext(index + 1);
    }
  };

  // Wait until main thread is idle or 1500ms after load to not block FCP/LCP
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => setTimeout(() => preloadNext(0), 1000), { timeout: 3000 });
  } else {
    setTimeout(() => preloadNext(0), 1500);
  }
}
