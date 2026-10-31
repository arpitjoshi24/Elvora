import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-5 p-5">
      <Link href="/user_login">user_login</Link>

      <Link href="/Admin_Category">Admin_Category</Link>
      <Link href="/product_page">Product_page</Link>
      <Link href="/wish_list">WishList</Link>
       <Link href="/checkout">CheckOut</Link>
    </div>
  );
}


