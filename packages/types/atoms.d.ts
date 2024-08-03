import type { HTMLAttributes, HTMLTag } from "astro/types";
import type { SizeVariant, ComponentProps } from "./shared";

export type ButtonVariant = "fill" | "outline" | "text";
export interface ButtonProps
  extends ComponentProps<ButtonVariant>,
    HTMLAttributes<"button"> {}

export type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export interface HeadingProps
  extends ComponentProps<HeadingVariant>,
    HTMLAttributes<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> {
  tag?: HeadingTag;
}
