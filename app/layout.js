import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";

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
      <body className="bg-primary-950 text-primary-100 min-h-screen">
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
