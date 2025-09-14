// app/contractors/page.tsx
export default function ContractorsPage() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Become a FixLink Contractor
        </h1>
        <p className="text-gray-600 max-w-xl mb-6">
          Join FixLink and get matched with customers in need of your expertise.
          Sign up today and start receiving job requests in your area.
        </p>
        <a
          href="https://tally.so/r/CONTRACTOR_FORM_ID" // or embed like intake
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
        >
          Sign Up as a Contractor
        </a>
      </main>
    );
  }
  