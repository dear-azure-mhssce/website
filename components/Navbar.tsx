import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex-center foxed top-0 z-50 w-full border-b-2 border-white-200 py-7 text-black bg-white  ">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16 ">
        <Link href="/">
          <Image src="/Logo.svg" alt="Logo" width={70} height={55} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
