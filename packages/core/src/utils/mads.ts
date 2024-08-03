import { twMerge } from "tailwind-merge";
import type { ClassSchema, SizeVariant } from "mads-types";
import type { HTMLAttributes } from "astro/types";
import tinycolor from "tinycolor2";

class Mads<V extends string> {
  private base: ClassSchema<V>["base"];
  private variants: ClassSchema<V>["variants"];

  public constructor(schema: ClassSchema<V>) {
    this.base = schema.base;
    this.variants = schema.variants;
  }

  private getRgba(color: string, variable: string) {
    if (!tinycolor(color).isValid()) {
      console.error(`${color} is not a valid color`);
      return undefined;
    }
    const alpha = 0;
    const rgba = tinycolor(color).setAlpha(alpha).toRgbString();
    const index = rgba.lastIndexOf(alpha.toString());
    return rgba.slice(0, index) + `var(${variable})` + rgba.slice(index + 1);
  }

  public getClass(
    { variant, size }: { variant: V; size: SizeVariant },
    toMerge?: HTMLAttributes<"html">["class"]
  ): string {
    let classNames = this.base;
    if (variant in this.variants.type) {
      classNames += " " + this.variants.type[variant];
    }
    if (size in this.variants.size) {
      classNames += " " + this.variants.size[size];
    }
    if (toMerge) {
      classNames = twMerge(classNames, toMerge);
    }
    return classNames.trim();
  }

  public getStyle(
    { variant, color }: { variant: V; color: string },
    toMerge?: HTMLAttributes<"html">["class"]
  ): astroHTML.JSX.CSSProperties {
    const properties: astroHTML.JSX.CSSProperties = {};
    if (!(variant in this.variants.type)) return properties;

    const matchedVariant = this.variants.type[variant];
    if (
      matchedVariant.includes("text-opacity") &&
      !toMerge?.includes("text-")
    ) {
      properties.color = this.getRgba(color, "--tw-text-opacity");
    }
    if (matchedVariant.includes("bg-opacity-") && !toMerge?.includes("bg-")) {
      properties.backgroundColor = this.getRgba(color, "--tw-bg-opacity");
    }
    if (
      matchedVariant.includes("border-opacity") &&
      !toMerge?.includes("border-")
    ) {
      properties.borderColor = this.getRgba(color, "--tw-border-opacity");
    }
    return properties;
  }
}

const defineClass = <V extends string>(schema: ClassSchema<V>) => {
  return new Mads<V>(schema);
};

export { defineClass };
