import type { ButtonVariant } from "mads-types";
import { defineClass } from "../../utils/mads";

const styles = defineClass<ButtonVariant>({
  base: "font-normal leading-none capitalize",
  variants: {
    type: {
      fill: "bg-black text-white",
      outline: "",
      text: "",
    },
    size: {
      sm: "px-2 py-1 rounded text-xs",
      md: "px-4 py-2 rounded text-base",
      lg: "px-6 py-3 rounded text-lg",
    },
  },
});

export default styles;
