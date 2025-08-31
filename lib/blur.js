export function shimmer(w, h) {
  return `\
  <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#e2e8f0" offset="20%" />
        <stop stop-color="#f1f5f9" offset="50%" />
        <stop stop-color="#e2e8f0" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#e2e8f0" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`
}

export function toBase64(str) {
  if (typeof window === 'undefined') {
    return Buffer.from(str).toString('base64')
  }
  return window.btoa(str)
}
