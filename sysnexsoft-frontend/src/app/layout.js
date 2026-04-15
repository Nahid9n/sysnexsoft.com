import Navbar from "@/components/Navbar";
import Script from "next/script";
import Head from "@/app/head";
import Footer from "@/components/Footer";
export const metadata = {
    title: "SYSNEX - Software & IT Solutions",
    description: "SYSNEX - Software & IT Solutions",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <Head />
        <body>
            <Navbar />

                <div>
                    {children}
                </div>

            <Footer />

            {/* jQuery FIRST */}
            <Script
                src="/assets/js/vendors/jquery-3.6.0.min.js"
                strategy="beforeInteractive"
            />

            {/* Bootstrap after jQuery */}
            <Script
                src="/assets/js/vendors/bootstrap.bundle.min.js"
                strategy="afterInteractive"
            />

            {/* Plugins */}
            <Script
                src="/assets/js/vendors/swiper-bundle.min.js"
                strategy="afterInteractive"
            />

            <Script
                src="/assets/js/vendors/jquery.magnific-popup.min.js"
                strategy="afterInteractive"
            />

            <Script
                src="/assets/js/vendors/parallax.min.js"
                strategy="afterInteractive"
            />

            <Script
                src="/assets/js/vendors/aos.js"
                strategy="afterInteractive"
            />

            <Script
                src="/assets/js/vendors/massonry.min.js"
                strategy="afterInteractive"
            />

            {/* Main App JS LAST */}
            <Script
                src="/assets/js/app.js"
                strategy="lazyOnload"
            />

        </body>
        </html>
    );
}