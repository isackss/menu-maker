import { Museum } from "@mui/icons-material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <header className="flex flex-row justify-between px-6 py-6 items-center border">
      <Logo />
      <div>
        <div className="flex gap-4 font-bold max-md:hidden">
          <button>Iniciar sesión</button>
          <button>Crear Cuenta</button>
          <button>Idioma</button>
        </div>
        <MobileNavbar />
      </div>
    </header>
  );
};

export default Header;
