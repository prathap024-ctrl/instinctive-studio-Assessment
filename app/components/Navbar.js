import { Cctv, Database, IndentIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const user = {
  name: "John Doe",
  email: "abc@example.com",
};

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <header className="bg-gray-900 shadow text-white px-6 py-4 text-md font-semibold flex justify-between items-center">
        <h1>Secure Sight</h1>
        <div className="flex gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Cctv className="w-6 h-6" /> Camera
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <Database className="w-6 h-6" /> Dashboard
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <IndentIcon className="w-6 h-6" /> Incidents
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <User className="w-6 h-6" />
            Users
          </Link>
        </div>
        <div className="text-sm flex gap-2">
          <div className="bg-gray-800 p-2 rounded-full">
            <Image
              width={8}
              height={8}
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
              alt="avatar"
            />
          </div>
          {user.name}
          <br />({user.email})
        </div>
      </header>
    </div>
  );
};

export default Navbar;
