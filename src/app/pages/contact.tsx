export default function Contact() {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-6 text-gray-700">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-2">Email: <a href="mailto:info@fixlinkca.com" className="text-blue-500 hover:underline">info@fixlinkca.com</a></p>
        <p className="mb-2">Instagram: <a href="https://instagram.com/fixlink" target="_blank" className="text-blue-500 hover:underline">@fixlink</a></p>
        <p className="mb-2">TikTok: <a href="https://www.tiktok.com/@fixlink" target="_blank" className="text-blue-500 hover:underline">@fixlink</a></p>
        <p className="mt-4 max-w-xl text-center">
          You can also reach us through our social media pages for quick updates on products, new arrivals, and promotions.
        </p>
      </main>
    )
  }
  