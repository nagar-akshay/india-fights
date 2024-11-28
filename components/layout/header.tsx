"use client"

import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, MenuIcon, AlertCircle } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const { setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <AlertCircle className="h-6 w-6" />
          <span className="font-bold">CivicConnect</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/report" className="text-foreground/60 hover:text-foreground">
            Report Issue
          </Link>
          <Link href="/dashboard" className="text-foreground/60 hover:text-foreground">
            Dashboard
          </Link>
          <Link href="/forum" className="text-foreground/60 hover:text-foreground">
            Community
          </Link>
          <Link href="/whistleblower" className="text-foreground/60 hover:text-foreground">
            Whistleblower
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}