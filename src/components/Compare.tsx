import React from "react";
import { Compare } from "@/components/ui/compare";

export default function CompareImage() {
  return (
    <div className="p-4 mx-[20%] border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-[10%]">
      <Compare
        firstImage="/myImages/2.jpg"
        secondImage="/myImages/6.jpg"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
