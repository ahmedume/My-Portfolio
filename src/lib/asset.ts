/** Prefixes a repo-relative public path with Vite's base, so assets resolve
 *  on GitHub Pages subpaths (see `base` in vite.config.ts). */
export const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`;
