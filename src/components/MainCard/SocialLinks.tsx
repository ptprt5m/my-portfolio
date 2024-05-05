import { Contacts, LANGUAGES } from "@/constants";
import { GitHub, Telegram, Mail } from "@/svg";
import { cn } from "@/utils";

export const SocialLinks = ({ className }: { className?: string }) => (
  <div className={cn("flex gap-3 items-center", className)}>
    <a
      href={Contacts[LANGUAGES.EN].github}
      className="transition hover:scale-125"
      target="_blank"
    >
      <GitHub />
    </a>
    <a
      href={Contacts[LANGUAGES.EN].telegramLink}
      className="transition hover:scale-125"
      target="_blank"
    >
      <Telegram />
    </a>
    <a
      href={`mailto:${Contacts[LANGUAGES.EN].mail}`}
      className="transition hover:scale-125"
      target="_blank"
    >
      <Mail />
    </a>
  </div>
);
