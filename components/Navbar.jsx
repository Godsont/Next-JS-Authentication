import Link from "next/link";
import ProfileIcon from "./ProfileIcon";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between fixed left-0 right-0 px-8 h-14 bg-blue-500 text-white">
      <Link className="font-bold" href={"/"}>
        GTCoding.
      </Link>
      <ProfileIcon />
    </nav>
  );
}
