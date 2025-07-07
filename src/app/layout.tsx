import type { Metadata } from "next";
import { ConsentManagerProvider, CookieBanner, ConsentManagerDialog } from "@c15t/nextjs";
import { GoogleAnalytics } from "../components/GoogleAnalytics";

import "./reset.css"
import "./global.css"

export const metadata: Metadata = {
  title: "Strange Orbit",
  description: "A portfolio of beautiful, delightful apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
          <body>
    		<ConsentManagerProvider options={{
    				mode: 'offline',
    				consentCategories: ['necessary', 'marketing'], // Optional: Specify which consent categories to show in the banner. 
    			}}>
    			<CookieBanner />
    			<ConsentManagerDialog />
    			
            {children}
          
          <GoogleAnalytics />
    		</ConsentManagerProvider>
    	</body>
        </html>
      )
}
