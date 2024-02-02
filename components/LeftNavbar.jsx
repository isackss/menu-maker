import Link from "next/link";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const LeftNavbar = () => {
  return (
    <nav className="flex flex-col items-center gap-10 p-2 h-screen max-sm:hidden w-32">
      <Link href="/" className="flex gap-3 w-full hover:font-bold">
        <MdOutlineRestaurantMenu className="text-3xl" />
        <span>Menús</span>
      </Link>
      <Link href="/covers" className="flex gap-3 w-full hover:font-bold">
        <LayersOutlinedIcon className="text-3xl" /> Portadas
      </Link>
      <Link href="" className="flex gap-3 w-full hover:font-bold">
        <CalendarMonthOutlinedIcon className="text-3xl" />
        Reservas
      </Link>
      {/* <Link href="">Referidos</Link> */}
      <Link href="" className="flex gap-3 w-full hover:font-bold">
        <PeopleAltOutlinedIcon className="text-3xl" />
        Clientes
      </Link>
      <Link href="" className="flex gap-3 w-full hover:font-bold">
        <OndemandVideoOutlinedIcon className="text-3xl" /> Tutoriales
      </Link>
      <Link href="" className="flex gap-3 w-full hover:font-bold">
        <WhatsAppIcon className="text-3xl" /> Contacto
      </Link>
    </nav>
  );
};

export default LeftNavbar;
