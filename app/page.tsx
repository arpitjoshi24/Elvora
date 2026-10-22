import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>hello</h1>
      <Link href="/user_login">
            user_login
      </Link>
      <Link href="/cart">
            cart
      </Link>
      <Link href="/profile">
            profile
      </Link>

    </>
  );
}
