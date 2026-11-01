import { redirect } from "next/navigation";

// The cart screen lives in /checkout.
export default function CartPage() {
  redirect("/checkout");
}
