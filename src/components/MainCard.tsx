import { Contacts } from "@/constants";
import { Mail, Telegram } from "@/svg";
import Image from "next/image";
import Link from "next/link";

export const MainCard = () => (
  <div className="w-full max-w-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border p-10 z-10 rounded-[40px] bg-white bg-opacity-30 backdrop-blur">
    <div
      className="absolute rounded-[40px] inset-0 bg-cover bg-center opacity-5"
      style={{ backgroundImage: 'url("/bg.jpeg")' }}
    ></div>

    <div className="flex flex-col gap-14 z-10 relative">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-1">
          <span className="text-4xl font-semibold">
            {Contacts.firstName} <br />
            {Contacts.lastName}
          </span>
          <span className="text-xl ">{Contacts.profession}</span>
        </div>
        <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-5 rounded-full bg-white/[.45]">
          <Image src="/avatar.png" width={120} height={120} alt="avatar" />
        </div>
      </div>
      <div className="flex gap-1 items-end justify-between bg-white/[.45] dark:bg-white/[.15] py-2 px-6 rounded-xl">
        <span>{Contacts.location}</span>
        <span className="flex gap-3">
          <Link
            href={Contacts.telegramLink}
            className="transition hover:scale-125"
          >
            <Telegram />
          </Link>
          <Link
            href={`mailto:${Contacts.mail}`}
            className="transition hover:scale-125"
          >
            <Mail />
          </Link>
        </span>
      </div>
    </div>
  </div>
);
