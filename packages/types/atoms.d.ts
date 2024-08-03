import type { HTMLAttributes } from "astro/types";

export type SizeVariant = "sm" | "md" | "lg";

export type ButtonVariant = "fill" | "outline" | "text";
export interface ButtonProps extends HTMLAttributes<"button"> {
  color?: string;
  variant?: ButtonVariant;
  size?: SizeVariant;
}

export type ClassSchema<V extends string> = {
  base: string;
  variants: {
    type: Record<V, string>;
    size: Record<SizeVariant, string>;
  };
};
