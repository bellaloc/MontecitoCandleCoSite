// app/layout.tsx

import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Montecito Candle Co</title>
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
