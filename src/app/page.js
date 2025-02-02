import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-16">
      <h1 className="text-5xl font-extrabold text-blue-600">Find Your Next Opportunity</h1>
      <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl">
        A job platform built for disabled individuals seeking **remote** and **flexible** work opportunities.
      </p>

      <div className="mt-6 flex space-x-4">
        <Link href="/jobs">
          <span className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 cursor-pointer">
            Browse Jobs
          </span>
        </Link>
        <Link href="/auth/signup">
          <span className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 cursor-pointer">
            Join Now
          </span>
        </Link>
      </div>

      <div className="mt-10 w-full max-w-4xl">
        <img src="/landing-image.png" alt="Job Search" className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
}
