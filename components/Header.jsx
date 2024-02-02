import { Museum } from "@mui/icons-material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <header className="flex flex-row justify-between px-6 py-6 items-center border">
      <Link href="/">
        <div className="flex flex-row items-end">
          Menú
          <Museum className="text-4xl m-0 p-0" />
          <span className="font-bold">aker</span>
        </div>
      </Link>
      <div className="flex gap-4 font-bold max-md:hidden">
        <button>Iniciar sesión</button>
        <button>Crear Cuenta</button>
        <button>Idioma</button>
      </div>
      <MenuIcon className="hidden max-md:block" />
    </header>
  );
};

export default Header;
