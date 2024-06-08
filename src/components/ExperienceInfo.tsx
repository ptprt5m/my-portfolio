import { Coding, Location, Star, Target } from "@/svg";
import type { FC } from "react";

interface IExperienceInfo {
  company: string;
  desc: string;
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
    {desc && <p>{desc}</p>}
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
);
