import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [['remark-gfm', { singleTilde: false }]],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)