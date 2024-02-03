import Link from "next/link";
import React from "react";

export default function header() {
  return (
    <div className="w-full absolute z-10 text-white">
      <nav className="relative container flex flex-wrap items-center justify-between mx-auto p-8">
        <Link className="font-bold text-3xl" href="/">
          Home
        </Link>
        <div className="space-x-3 text-xl">
          <Link href="/preformance">preformance</Link>
          <Link href="/reliability">reliability</Link>
          <Link href="/scale">scale</Link>
        </div>
      </nav>
    </div>
  );
}
