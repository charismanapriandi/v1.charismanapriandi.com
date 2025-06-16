import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { darkTheme, theme } from "config/theme";
import ColorSchemeProvider, { ColorSchemeContext } from "context/ColorScheme";
import { FC, useContext } from "react";
import globalStyles from "styles/global";
import Script from "next/script";
import { GoogleAnalytics } from "nextjs-google-analytics";

function App(props: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
      </Script>
      <GoogleAnalytics strategy="lazyOnload" trackPageViews />
      <ColorSchemeProvider>
        <ThemeController {...props} />
      </ColorSchemeProvider>
    </>
  );
}

const ThemeController: FC<AppProps> = ({ Component, pageProps }) => {
  const { colorScheme } = useContext(ColorSchemeContext);

  return (
    <ThemeProvider theme={colorScheme === "dark" ? darkTheme : theme}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
