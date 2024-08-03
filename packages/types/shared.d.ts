export type SizeVariant = "sm" | "md" | "lg";
export interface ComponentProps<V extends string> {
    color?: string;
    variant?: V;
    size?: SizeVariant;
}

export type ClassSchema<V extends string> = {
  color: string;
  base: string;
  variants: {
    type: Record<V, string>;
    size?: Record<SizeVariant, string>;
  };
};
