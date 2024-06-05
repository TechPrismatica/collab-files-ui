import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  FilePenLine,
  Folder,
  Home,
  LineChart,
  ListFilter,
  MessageSquareText,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  Share2,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/theme-toggle";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src="https://lh3.googleusercontent.com/a/ACg8ocI57RONrK2WafAynM1NOAj3Ndcp11KnAH3xFpiZCfN4oJbNPV-YvA=s83-c-mo"
                    alt="Faizan Azim"
                  />
                  <AvatarFallback>FA</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent side="right">Faizan Azim</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Folder className="h-5 w-5" />
                  <span className="sr-only">File Manager</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">File Manager</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <MessageSquareText className="h-5 w-5" />
                  <span className="sr-only">Chats</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Chats</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <FilePenLine className="h-5 w-5" />
                  <span className="sr-only">Editor</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Editor</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Users2 className="h-5 w-5" />
                  <span className="sr-only">Contacts</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Contacts</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Shared</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Shared</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <ModeToggle></ModeToggle>
                  <span className="sr-only">Theme</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Theme</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <div className="flex flex-col items-start gap-6 sm:max-w-xs h-full">
              <nav className="grid gap-6 text-lg font-medium">
                <div className="flex flex-row">
                  <Avatar>
                    <AvatarImage
                      src="https://lh3.googleusercontent.com/a/ACg8ocI57RONrK2WafAynM1NOAj3Ndcp11KnAH3xFpiZCfN4oJbNPV-YvA=s83-c-mo"
                      alt="Faizan Azim"
                    />
                    <AvatarFallback>FA</AvatarFallback>
                  </Avatar>
                  <span className="h-5 ml-6 mt-2">Faizan Azim</span>
                </div>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground hover:text-foreground"
                >
                  <Folder className="h-5 w-5" />
                  File Manager
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground"
                >
                  <MessageSquareText className="h-5 w-5" />
                  Chats
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <FilePenLine className="h-5 w-5" />
                  Editor
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Contacts
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Share2 className="h-5 w-5" />
                  Shared
                </Link>
              </nav>
              <nav className="mt-auto grid gap-6 text-lg font-medium">
                <div
                  className="flex items-center gap-4 px-1 text-muted-foreground hover:text-foreground"
                >
                  <ModeToggle/>
                  Theme
                </div>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Settings className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
              </div>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
}
