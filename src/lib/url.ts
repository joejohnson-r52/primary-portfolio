// Prefix a root-relative path with the configured base path,
// so links work when the site is served from a subfolder (e.g. GitHub Pages).
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
