import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border border-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-center">
        {/* Links */}
        <div className="flex space-x-6 mt-3 md:mt-0">
          <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-700">
            Contact
          </Link>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t">
        <p className="text-center text-xs text-gray-400 py-3">
          © {new Date().getFullYear()} Fixlink. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
