// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <><Navbar />
    <main className="flex mx-auto flex-col items-center min-h-screen justify-start bg-gray-50 text-center p-6">
      {/* Motto */}
      <h1 className="mt-10 text-2xl md:text-3xl font-semibold text-gray-800">
        Welcome to FixLink!
      </h1>
      <p className="max-w-xl text-gray-600">
        We will find you the best and most efficient labour based on your needs!
      </p>
      <p className="mt-6 max-w-xl text-gray-600">
        Serving the following areas:
      </p>
      <p className="max-w-xl font-semibold text-gray-600">
        Saint John, NB (and surrounding areas)<br />
        Halifax, NS (and surrounding areas)
      </p>

      {/* Button to Intake Form */}
      <Link
        href="/intake"
        className="mt-6 mb-10 inline-block bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition"
      >
        Get a Quote
      </Link>
    </main></>
  );
}
