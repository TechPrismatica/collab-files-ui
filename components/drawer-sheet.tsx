import {
  FilePenLine,
  Folder,
  MessageSquareText,
  PanelLeft,
  Settings,
  Share2,
  Users2,
} from "lucide-react";
import Link from "next/link";

import { ModeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function DrawerSheet() {
  return (
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
            <div className="flex items-center gap-4 px-1 text-muted-foreground hover:text-foreground">
              <ModeToggle />
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
  );
}
