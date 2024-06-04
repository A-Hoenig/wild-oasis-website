import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";

//setup font import and configure font add to body with ${josefin.className}
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
// font import end

export const metadata = {
  title: {
    template: "%s The Wild Oasis",
    default: "Welcome to The Wild Oasis",
    description:
      "Luxury Cabin Hotel located in the heart of the italian dolmites surrounded by beautiful mountains and dark forrests",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
        <footer>Copyright LimeyDeveloper</footer>
      </body>
    </html>
  );
}
