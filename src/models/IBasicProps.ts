import type { ReactNode } from "react"

export interface IBasicProps {
  className?: string;
  children?: ReactNode;
}
export interface IBaseSVGProps extends IBasicProps {
  size?: number;
}
