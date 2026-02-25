import { Coding, Location, Star, Target } from "@/svg"
import type { FC, ReactNode } from "react"

function renderBoldText(text: string): ReactNode {
  const parts = text.split(/(\*\*.*?\*\*)/)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>
    }
    return part
  })
}

interface IExperienceInfo {
  company: string;
  desc: string[];
  duration: string;
  location: string;
  workFormat: string;
  role: string;
  level: string;
  skills: string[];
}

export const ExperienceInfo: FC<IExperienceInfo> = ({
  company,
  desc,
  duration,
  location,
  workFormat,
  role,
  level,
  skills,
}) => (
  <>
    <h2 className="text-2xl">{company}</h2>
    {desc && desc.length > 0 && (
      <div className="flex flex-col gap-2">
        {desc.map((paragraph, i) => (
          <p key={i}>{renderBoldText(paragraph)}</p>
        ))}
      </div>
    )}
    <span>{duration}</span>
    <div className="flex gap-3 flex-wrap leading-5">
      <span className="py-1 px-4 rounded-xl border border-slate-600 dark:border-slate-400 flex gap-1 items-center">
        <Location size={17} /> {location}
      </span>
      <span className="py-1 px-4 rounded-xl border border-slate-600 dark:border-slate-400 flex gap-1 items-center">
        <Target size={22} /> {workFormat}
      </span>
      <span className="py-1 px-4 rounded-xl border border-slate-600 dark:border-slate-400 flex gap-1 items-center">
        <Coding size={23} /> {role}
      </span>
      <span className="py-1 px-4 rounded-xl border border-slate-600 dark:border-slate-400 flex gap-1 items-center">
        <Star size={22} /> {level}
      </span>
    </div>
    <div className="flex gap-3 w-full flex-wrap">
      {skills.map((skill, i) => (
        <span
          key={i}
          className="py-0.5 px-4 bg-slate-300 dark:bg-slate-800 rounded-xl"
        >
          {skill}
        </span>
      ))}
    </div>
  </>
)
