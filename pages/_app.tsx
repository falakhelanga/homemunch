import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../components/app-layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import DataProvider from "../context/data";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </DataProvider>
  );
}
