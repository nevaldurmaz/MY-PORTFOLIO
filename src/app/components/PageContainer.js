import Head from "next/head";

import Header from "./Header";

const PageContainer = ({ title, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Portfolio" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <div className="relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light antialiased font-Montserrat dark:text-white">
        <div className="w-full h-full">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
