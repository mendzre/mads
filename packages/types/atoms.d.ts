import type { HTMLAttributes } from "astro/types";
import type { ComponentProps } from "./core";

export type ButtonVariant = "fill" | "outline" | "text";
export type ComposeButtonVariant =
  | "fill:sm"
  | "fill:md"
  | "fill:lg"
  | "outline:sm"
  | "outline:md"
  | "outline:lg"
  | "text:sm"
  | "text:md"
  | "text:lg";
export interface ButtonProps
  extends ComponentProps<ComposeButtonVariant>,
    HTMLAttributes<"button"> {}

export type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export interface HeadingProps
  extends ComponentProps<HeadingVariant>,
    HTMLAttributes<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> {
  tag?: HeadingTag;
}
