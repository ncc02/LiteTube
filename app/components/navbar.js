'use client'
import Link from "next/link";
export default function Navbar() {
    return (

      <div className="navbar bg-[#262626] mb-4 shadow-lg">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">LiteTube</Link>
        </div>
        <div className="flex justify-center w-full">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-48 md:w-96 bg-[#262626]"
            />
          </div>
        </div>
        <div className="flex-none gap-2">{/* Phần tử khác nếu cần */}</div>
      </div>
    );
  }
  