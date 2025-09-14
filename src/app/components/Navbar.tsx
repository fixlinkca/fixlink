import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border border-gray-300 flex items-center justify-between p-3 shadow-md bg-gray-50">
      {/* Logo */}
      <Link href="/">
        <Image src="/Fixlink.png" alt="Fixlink Logo" width={150} height={50} />
      </Link>
      <Link
          href={`https://tally.so/r/waWkjE`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white border-2 border-red-300 rounded-lg hover:bg-gray-200 transition"
        >
          Contractor Sign-Up
        </Link>
    </nav>
  );
}