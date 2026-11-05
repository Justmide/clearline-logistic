// Lightweight background preloader for essential local assets
export const CRITICAL_IMAGES_TO_PRELOAD = [
  "/assets/logo.jpeg",
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

  // Run only when main thread is completely idle to preserve 100% paint performance
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => setTimeout(() => preloadNext(0), 1200), { timeout: 4000 });
  } else {
    setTimeout(() => preloadNext(0), 2000);
  }
}
