import EducationCards from "@/components/EducationCards";
import ExpertiseCards from "@/components/ExpertiseCards";
import MyDrawer from "@/components/MyDrawer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EducationCards />
      <ExpertiseCards />
      <MyDrawer />
    </main>
  );
}
