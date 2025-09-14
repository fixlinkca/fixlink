// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <><Navbar />
    <main className="flex-col items-center justify-start bg-gray-50 text-center p-6">
      {/* Motto */}
      <h1 className="mt-10 text-2xl md:text-3xl font-semibold text-gray-800">
        Welcome to FixLink!
      </h1>
      <p className="max-w-xl text-gray-600">
        We will find you the best and most efficient labour based on your needs!
      </p>
      <p className="mt-10 max-w-xl text-gray-600 text-lg">
        Serving the following areas:
      </p>
      <p className="max-w-xl font-semibold text-gray-600 text-lg">
        Saint John, NB (and surrounding areas)<br />
        Halifax, NS (and surrounding areas)
      </p>

      {/* Button to Intake Form */}
      <Link
        href="/intake"
        className="mt-6 inline-block bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition"
      >
        Get a Quote
      </Link>
    </main></>
  );
}
