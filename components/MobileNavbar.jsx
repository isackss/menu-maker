import Link from "next/link";

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
import { navbarLinks } from "@/constants";
import Logo from "./Logo";
import MenuIcon from "@mui/icons-material/Menu";

const MobileNavbar = () => {
  return (
    <nav>
      <Drawer direction="left">
        <DrawerTrigger>
          <MenuIcon className="hidden max-md:block" />
        </DrawerTrigger>
        <DrawerContent className="overflow-y-auto">
          <DrawerHeader>
            <Logo />
          </DrawerHeader>
          <div className="flex flex-col gap-6 pt-6 px-4 mt-2 border-t">
            {navbarLinks.map((link) => (
              <Link
                key={link.label}
                href={link.ref}
                className="hover:bg-slate-300 p-4"
              >
                <DrawerClose className="w-full">{link.label}</DrawerClose>
              </Link>
            ))}
          </div>
          <DrawerFooter>
            <Button>Iniciar sesión</Button>
            <DrawerClose>
              <Button variant="outline" className="w-full">
                Salir
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default MobileNavbar;
