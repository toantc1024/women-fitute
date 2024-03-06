import {
  Madini_One,
  Maiden_Orange,
  Merriweather,
  Merriweather_Sans,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// const maidenOrange = Maiden_Orange({ subsets: ["latin"], weight: "400" });
const merriWeatherSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: "400",
});
export const metadata = {
  title: "Girl at FITUTE",
  description: "A gift from us to you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merriWeatherSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
