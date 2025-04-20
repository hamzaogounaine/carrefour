import Navigation from "../../ui/navigation";
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Menu } from "lucide-react";
import LaunchUI from "../../logos/launch-ui";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import numero from "../../../assets/numero.png";
export default function Navbar({
  logoImage = <Image src={logo} className="max-sm:w-40 w-50" alt="logo" />,
  // name = "Launch UI",
  homeUrl = "/",

  mobileLinks = [
    { text: "Materiel neuf", href: "/neuf" },
    { text: "Materiel occasion", href: "/occasion" },
    { text: "Location", href: "/location" },
    { text: "Nos services", href: "/services" },
  ],

  actions = [
    { text: "Sign in", href: "https://www.launchuicomponents.com/", isButton: false },
    // {
    //   image : "https://carrefourdemanutention.com/images/icons/Sans%20titre%20-%203.png",
    //   href: "https://www.launchuicomponents.com/",
    //   isButton: false,
    // },
  ],

  showNavigation = true,
  customNavigation,
  className
}) {
  return (
    <header className={cn("sticky top-0 z-50 shadow-xl px-4 border-b border-black", className)}>
      <div
        className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg"></div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent >
          <NavbarLeft>
            <a href={homeUrl} >
              {logoImage}
              {/* {name} */}
            </a>
            {showNavigation && (customNavigation || <Navigation />)}
          </NavbarLeft>
          <NavbarRight>
                <Image className="max-sm:w-30 w-50" src={numero} alt="numero" />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0 lg:hidden">
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" >
                <nav className="grid gap-6 text-lg font-medium ">
                  <Link href="/">
                  <Image src={logo} alt="carrefour de manutention" className="w-30" />
                  </Link>
                  {mobileLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground">
                      {link.text}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
