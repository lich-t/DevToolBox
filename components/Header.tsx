import React from "react";
import { Container } from "./ui/container";
import Link from "next/link";
import { Button } from "./ui/button";

const routes = [
  {
    href: "/",
    label: "Tools",
  },
  {
    href: "/",
    label: "About",
  },
  {
    href: "/",
    label: "Contact",
  },
];

export const Header = () => {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">DevToolKit</h1>
            </Link>
          </div>
        </div>
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 md:Block">
          {routes.map((route, i) => (
            <Button asChild variant={"ghost"}>
              <Link key={i} href={route.href} className="text-sm font-medium transition-colors">
                {route.label}
              </Link>
            </Button>
          ))}
        </nav>
      </Container>
    </header>
  );
};
