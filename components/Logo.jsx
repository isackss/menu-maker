import Link from "next/link";
import { Museum } from "@mui/icons-material";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex flex-row items-end">
        Menú
        <Museum className="text-4xl m-0 p-0" />
        <span className="font-bold">aker</span>
      </div>
    </Link>
  );
};

export default Logo;
