import { redirect } from "next/navigation";

// The site opens on the landing page.
export default function Home() {
  redirect("/landing");
}
