import Image from "next/image"

export default function NotFound() {
  return (
    <div className="flex flex-col h-full min-h-screen justify-center gap-5 items-center">
      <Image src="/404.png" alt="404 error" width={200} height={200} />
      <span>404</span>
    </div>
  )
}
