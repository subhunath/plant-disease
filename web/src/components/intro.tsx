import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

import Logo from "@/assets/logo.png"
import ScrollDown from "@/components/scroll-down"
import { siteConfig } from "@/config/site"

export default function Introduction() {
  return (
    <section className="py-4 md:py-0 min-h-screen flex justify-center items-center">
  <div className="w-11/12 md:w-1/2 flex flex-col items-center text-center">
    <h1 className="scroll-m-20 mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase gradient-text">
      {siteConfig.name}
    </h1>
    <p className="text-sm md:text-base mt-6">
      {siteConfig.description}
    </p>
    <Button className="my-7" asChild>
      <Link href="/home">Use {siteConfig.name}</Link>
    </Button>
  </div>
</section>

  )
}
