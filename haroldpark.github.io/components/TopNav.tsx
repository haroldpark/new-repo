"use client";

import { MenuIcon } from "lucide-react";
import { Logo } from "@/components/Logo";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const TopNav = () => {
  const features = [
    {
      title: "Dashboard",
      description: "Overview of your activity",
      href: "#",
    },
    {
      title: "Analytics",
      description: "Track your performance",
      href: "#",
    },
    {
      title: "Settings",
      description: "Configure your preferences",
      href: "#",
    },
    {
      title: "Integrations",
      description: "Connect with other tools",
      href: "#",
    },
    {
      title: "Storage",
      description: "Manage your files",
      href: "#",
    },
    {
      title: "Support",
      description: "Get help when needed",
      href: "#",
    },
  ];

  return (
    <section className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm py-4 border-b border-gray-200">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Logo size="md" showText />
          </a>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about-me"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About Me
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/services"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="items-center justify-end  lg:flex">
            <Button variant="outline" disabled>
              Sign in (Coming Soon)
            </Button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export { TopNav };
