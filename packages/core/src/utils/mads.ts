import { twMerge } from "tailwind-merge";
import type { ClassSchema, SizeVariant } from "mads-types";
import type { HTMLAttributes } from "astro/types";

class Mads<V extends string> {
  base: ClassSchema<V>["base"];
  variants: ClassSchema<V>["variants"];

  constructor(schema: ClassSchema<V>) {
    this.base = schema.base;
    this.variants = schema.variants;
  }

  getClass(
    { variant, size }: { variant: V; size: SizeVariant },
    toMerge?: HTMLAttributes<"html">["class"]
  ): string {
    let classNames = `${this.base} ${this.variants.type[variant]} ${this.variants.size[size]}`;
    if (toMerge) {
      classNames = twMerge(classNames, toMerge);
    }
    return classNames.trim();
  }
}

export const defineClass = <V extends string>(schema: ClassSchema<V>) => {
  return new Mads<V>(schema);
};

export default {
  defineClass,
} as const;
