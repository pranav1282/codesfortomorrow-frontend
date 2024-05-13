import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Link href="/signup">SignUp</Link>
      <Link href="/signin">SignIn</Link>
    </main>
  );
}
