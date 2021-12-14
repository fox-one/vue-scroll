export const mediaQuery = () => {
  if (!window || !window.matchMedia) return null;
  return {
    phone: window.matchMedia('(max-width:575px)').matches,
    handheld:
      window.matchMedia('(min-width:576px)').matches &&
      window.matchMedia('(max-width: 767px)').matches,
    tablet:
      window.matchMedia('(min-width:768px)').matches &&
      window.matchMedia('(max-width: 1024px)').matches,
    laptop:
      window.matchMedia('(min-width:1025px)').matches &&
      window.matchMedia('(max-width: 1439px)').matches,
    desktop: window.matchMedia('(min-width:1440px)').matches,
  };
};

export function isIOS() {
  const ua = navigator.userAgent.toLowerCase();
  return /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(ua);
}

export function scrollWrapperHeight(fixedHeight: string | number = 0) {
  const HFHeight =
    typeof fixedHeight === 'number' ? `${fixedHeight}px` : fixedHeight;
  return isIOS()
    ? `calc(100vh - ${HFHeight} - env(safe-area-inset-top) - env(safe-area-inset-bottom))`
    : `calc(100vh - ${HFHeight})`;
}

export const generateUUID: () => string = () => {
  let d = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x7) | 0x8).toString(16);
  });
  return uuid;
};