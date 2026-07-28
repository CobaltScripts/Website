import nextra from 'nextra';

const withNextra = nextra({
  contentDirBasePath: '/docs',
});

export default withNextra({
  output: 'export',
  images: {
    unoptimized: true,
  },
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.ts',
    },
  },
});
