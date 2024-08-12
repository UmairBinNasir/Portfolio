import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import Link from "next/link";

function MyDrawer() {
  return (
    <Drawer>
      <DrawerTrigger className="mt-20 border-2 border-white px-3 py-2 rounded-lg">Visit My LinkedIn</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Do you want to contact me?</DrawerTitle>
          <DrawerDescription>
            Click on the button below for my Linkedin.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Link
            href="https://www.linkedin.com/in/umair-bin-nasir-820189242/"
            target="_blank"
          >
            <Button>linkedin</Button>
          </Link>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default MyDrawer;
