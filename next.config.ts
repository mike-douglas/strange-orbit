import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
 
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // basePath: '/strange-orbit',
  output: 'export',
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  webpack: (config) => {
    config.watchOptions.ignored = [
      ...(Array.isArray(config.watchOptions.ignored) ? config.watchOptions.ignored : []),
      /inspo/,
    ];
    return config;
  },
  images: {
    unoptimized: true,
  },
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  },
})
 
export default withMDX(nextConfig)
