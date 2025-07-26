import { NotFoundMessage } from "@/components/NotFoundMessage"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="flex flex-col h-full min-h-screen justify-center gap-5 items-center">
      <Image
        src="/404.png"
        alt="404 error"
        width={120}
        height={120}
        className="drop-shadow-xl"
      />
      <NotFoundMessage />
    </div>
  )
}
