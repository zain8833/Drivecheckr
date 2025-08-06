import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterNavbar from "./components/Footer";

export const metadata = {
  title: "Drivecheckr",
  description: "Your vehicle inspection assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}

        {/* Crisp Live Chat Script */}
        <Script
          id="crisp-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp = [];
              window.CRISP_WEBSITE_ID = "9529aac1-4ec9-498b-ae5b-bb34afbf6dd6";
              (function () {
                var d = document;
                var s = d.createElement("script");
                s.src = "https://client.crisp.chat/l.js";
                s.async = 1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();`,
          }}
        />
        <FooterNavbar/>
      </body>
    </html>
  );
}
