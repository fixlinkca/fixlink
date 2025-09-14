import Navbar from "../components/Navbar";
import Link from "next/link";

export default function IntakePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen bg-gray-50 p-6 text-center">
        <h1 className="mt-10 text-2xl md:text-3xl font-semibold text-gray-800">
          Service Intake Form
        </h1>

        <p className="max-w-xl text-gray-600 mb-6">
          Fill out our service intake form and we’ll connect you with the best contractors for your needs.
        </p>

        {/* Button linking to Tally form */}
        <Link
          href={`https://tally.so/r/3EpajA?fresh=${Date.now()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          GO TO FORM
        </Link>

        <p className="text-gray-500 text-sm mt-6 mb-10 max-w-md">
          Note: You’ll be redirected to Tally to complete the form. Your submissions will be sent to us automatically.
        </p>
      </main>
    </>
  );
}
