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
      <Link href="/user_register">
      user_register
      </Link>
      <Link href="/Admin_Order">
      Admin_Order
      </Link>
      <Link href="/landing">
      Landing
      </Link>
      <Link href="/profile">
      Profile
      </Link>
      <Link href="/admin_login">
      Admin Login
      </Link>
    </>
  );
}
