"use client"

import Link from "next/link"
import { links } from "./helpers/data"
import { AiFillBug } from "react-icons/ai"
import { usePathname } from "next/navigation"
import classNames from "classnames"

const Navbar = () => {
  const currentPath = usePathname()
  return (
    <nav className="flex space-x-4 border-b mb-5 px-6 h-14 items-center">
      <Link href={"/"}>
        <AiFillBug className="lg:text-2xl" />
      </Link>

      <ul className="flex space-x-2">
        {links.map((link) => {
          return (
            <li key={link.href}>
              <Link
                className={classNames({
                  "text-zinc-950": link.href === currentPath,
                  "text-zinc-500 hover:text-zinc-600 transition-colors":
                    link.href !== currentPath,
                  "lg:text-xl": true,
                })} 
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
