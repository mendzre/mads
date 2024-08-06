import type { HeadingVariant } from "mads-types";
import { defineClass } from "../../utils/mads";

const styles = defineClass<HeadingVariant>({
  base: "text-mads text-opacity-100 font-semibold leading-none capitalize",
  variants: {
    h1: "text-[3.5rem]",
    h2: "text-5xl",
    h3: "text-[2.5rem]",
    h4: "text-[2rem]",
    h5: "text-2xl",
    h6: "text-base",
  },
});

export default styles;
