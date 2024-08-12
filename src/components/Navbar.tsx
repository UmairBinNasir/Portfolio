import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import MyDrawer from "./MyDrawer";

function Navbar() {
  return (
    <Menubar className="justify-center">
      <MenubarMenu>
        <Link href="home">
          <MenubarTrigger>Home</MenubarTrigger>
        </Link>
        <Link href="/work">
          <MenubarTrigger>Projects</MenubarTrigger>
        </Link>
        <Link href="/skills">
          <MenubarTrigger>Skills</MenubarTrigger>
        </Link>
        {/* <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent> */}
      </MenubarMenu>
    </Menubar>
  );
}

export default Navbar;
