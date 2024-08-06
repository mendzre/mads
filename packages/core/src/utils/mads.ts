import { twMerge } from "tailwind-merge";
import tinycolor from "tinycolor2";
import type { ClassSchema } from "mads-types";
import type { HTMLAttributes } from "astro/types";

class Mads<V extends string> {
  private schema: ClassSchema<V>;

  public constructor(schema: ClassSchema<V>) {
    this.schema = schema;
  }

  public getClass(
    selected: V,
    toMerge?: HTMLAttributes<"html">["class"]
  ): string {
    let classNames = this.schema.base;
    if (selected in this.schema.variants) {
      classNames += ` ${this.schema.variants[selected]}`;
    }
    if (toMerge) {
      classNames = twMerge(classNames, toMerge);
    }
    return classNames.trim();
  }

  public getStyle(color: string): astroHTML.JSX.CSSProperties {
    const properties: astroHTML.JSX.CSSProperties = {};
    const { r, g, b } = tinycolor(color).toRgb();
    properties["--mads-color"] = `${r} ${g} ${b}`;
    return properties;
  }
}

const defineClass = <V extends string>(schema: ClassSchema<V>) => {
  return new Mads<V>(schema);
};

export { defineClass };
