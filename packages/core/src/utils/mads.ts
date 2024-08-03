import { twMerge } from "tailwind-merge";
import tinycolor from "tinycolor2";
import type { ClassSchema, SizeVariant } from "mads-types";
import type { HTMLAttributes } from "astro/types";

class Mads<V extends string> {
  private color: ClassSchema<V>["color"];
  private base: ClassSchema<V>["base"];
  private variants: ClassSchema<V>["variants"];

  public constructor(schema: ClassSchema<V>) {
    this.color = schema.color;
    this.base = schema.base;
    this.variants = schema.variants;
  }

  private getRgba(color: string, variable: string) {
    const alpha = 0;
    const rgba = tinycolor(color).setAlpha(alpha).toRgbString();
    const index = rgba.lastIndexOf(alpha.toString());
    return rgba.slice(0, index) + `var(${variable})` + rgba.slice(index + 1);
  }

  public getClass(
    { variant, size }: { variant: V; size?: SizeVariant },
    toMerge?: HTMLAttributes<"html">["class"]
  ): string {
    let classNames = this.base;
    if (variant in this.variants.type) {
      classNames += " " + this.variants.type[variant];
    }
    if (this.variants.size && size && size in this.variants.size) {
      classNames += " " + this.variants.size[size];
    }
    if (toMerge) {
      classNames = twMerge(classNames, toMerge);
    }
    return classNames.trim();
  }

  private getColor(color?: string) {
    return color && tinycolor(color).isValid() ? color : this.color;
  }

  public getStyle(
    variant: V,
    toMerge?: Partial<{
      color: string;
      className: HTMLAttributes<"html">["class"];
    }>
  ): astroHTML.JSX.CSSProperties {
    const properties: astroHTML.JSX.CSSProperties = {};
    if (!(variant in this.variants.type)) return properties;
    const color = this.getColor(toMerge?.color);

    const matchedVariant = this.variants.type[variant];
    if (
      (this.base.includes("text-opacity") ||
        matchedVariant.includes("text-opacity")) &&
      !toMerge?.className?.includes("text-")
    ) {
      properties.color = this.getRgba(color, "--tw-text-opacity");
    }
    if (
      (this.base.includes("bg-opacity-") ||
        matchedVariant.includes("bg-opacity-")) &&
      !toMerge?.className?.includes("bg-")
    ) {
      properties.backgroundColor = this.getRgba(color, "--tw-bg-opacity");
    }
    if (
      (this.base.includes("border-opacity-") ||
        matchedVariant.includes("border-opacity-")) &&
      !toMerge?.className?.includes("border-")
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
