import createMDX from '@next/mdx'

const withMDX = createMDX({})

export default withMDX({
  agentRules: false,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      { source: '/characters', destination: '/doppelgangers', permanent: true },
      { source: '/walkthrough', destination: '/guides', permanent: true },
      { source: '/endings', destination: '/guides/all-endings', permanent: true },
    ]
  },
})
