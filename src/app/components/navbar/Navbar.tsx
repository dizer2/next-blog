"use client";


import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import "./header.css";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { status } = useSession();

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden title__block" justify="center">
        <NavbarBrand>
          <Link href="/" aria-current="page">
            <p className="font-bold text-lg title__page">Yurii Tovarnytskyi</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:flex gap-4 navbarContent" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        {status === "authenticated" && (
          <NavbarItem>
            <Link href="/write" color="foreground">
              Write
            </Link>
          </NavbarItem>
        )}
      
      </NavbarContent>

      <NavbarContent className="button__block" justify="end">
        <NavbarItem>
          {status === "authenticated" ? (
            <>
              <Button onClick={() => signOut()} color="danger" variant="flat">
                Log out
              </Button>
            </>
          ) : (
            <Button as={Link} color="secondary" href="/login" variant="flat">
              Login
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="burger hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="burger__menu items-center justify-center">
      <NavbarItem>
          <Link color="foreground"  className="textNavbar"  href="/">
            Home
          </Link>
        </NavbarItem>
        {status === "authenticated" && (
          <NavbarItem>
            <Link href="/write"  className="textNavbar"  color="foreground">
              Write
            </Link>
          </NavbarItem>
        )}
      

        <NavbarItem>
          {status === "authenticated" ? (
            <>
              <Button onClick={() => signOut()} color="danger" size="lg" variant="flat">
                Logout
              </Button>
            </>
          ) : (
            <Button as={Link} color="secondary"  href="/login" size="lg" variant="flat">
              Login
            </Button>
          )}
        </NavbarItem>
      </NavbarMenu>

    </Navbar>
  );
}
