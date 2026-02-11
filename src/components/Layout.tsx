import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
