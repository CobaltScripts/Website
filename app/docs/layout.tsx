import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { getPageMap } from 'nextra/page-map';

const navbar = <Navbar logo={<b>Cobalt Docs</b>} />;

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout
      navbar={navbar}
      pageMap={await getPageMap('/docs')}
      footer={null}
      editLink={null}
      feedback={{ content: null }}
      nextThemes={{ defaultTheme: 'dark' }}
    >
      {children}
    </Layout>
  );
}
