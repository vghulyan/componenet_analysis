/*
import Image from "next/image";
<Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
*/

// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Component Usage Dashboard
      </h1>
      <Link
        href="/report"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow"
      >
        View Usage Report
      </Link>
    </main>
  );
}
