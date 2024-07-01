"use client";

// import React from "react";
// import styles from "./navbar.module.css"
// import Image from "next/image";
// import Link from "next/link";
// import { AuthLinks } from "../authLinks/AuthLinks";
// import { ThemeToggle } from "../themeToggle/ThemeToggle";
// import {Button} from "@nextui-org/button";

// export function Navbar() {
//   return (
// <div className={styles.container}>
//   <div className={styles.social}>
//     <Image src='/facebook.png' alt="fasebook" width={24} height={24} />
//     <Image src='/instagram.png' alt="instagram" width={24} height={24} />
//     <Image src='/tiktok.png' alt="tiktok" width={24} height={24} />
//     <Image src='/youtube.png' alt="youtube" width={24} height={24} />
//   </div>

//   <div className={styles.logo}>yuriiblog</div>
//   <Button color="primary">
//   Button
// </Button>

//   <div className={styles.links}>
//     <ThemeToggle />
//     <Link href="/" className={styles.link}>HomePage</Link>
//     <Link href="/" className={styles.link}>Contact</Link>
//     <Link href="/" className={styles.link}>About</Link>

//     <AuthLinks />
//   </div>

// </div>
//   );
// }

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
        <NavbarItem>
          <Link href="#" color="foreground">
            Contact
          </Link>
        </NavbarItem>
      
      </NavbarContent>

      <NavbarContent className="button__block" justify="end">
        <NavbarItem>
          {status === "authenticated" ? (
            <>
              <Button onClick={() => signOut()} color="danger" variant="flat">
                Logout
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
          <Link color="foreground"  className="text-lg"  href="/">
            Home
          </Link>
        </NavbarItem>
        {status === "authenticated" && (
          <NavbarItem>
            <Link href="/write"  className="text-lg"  color="foreground">
              Write
            </Link>
          </NavbarItem>
        )}
        <NavbarItem >
          <Link href="#" className="text-lg" color="foreground">
            Contact
          </Link>
        </NavbarItem>

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
