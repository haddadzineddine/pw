import Image from "next/image";
import NavBar from "../navbar";

export default function Header() {
  return (
    <header className="bg-wave-background bg-cover bg-center bg-no-repeat h-96">
      <NavBar />

      <div className="flex justify-end items-center h-full">
        <Image src="/images/3d-user.png" alt="Logo" width={300} height={300} />
      </div>
    </header>
  );
}