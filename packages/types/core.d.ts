export type SizeVariant = "sm" | "md" | "lg";

export interface ComponentProps<V extends string> {
  color?: string;
  variant?: V;
}

export type ClassSchema<V extends string> = {
  base: string;
  variants: Record<V, string>;
};
