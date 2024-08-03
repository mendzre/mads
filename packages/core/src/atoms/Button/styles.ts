import type { ButtonVariant } from "mads-types";
import { defineClass } from "../../utils/mads";

const styles = defineClass<ButtonVariant>({
  base: "border font-normal leading-none capitalize disabled:opacity-50 transition-colors",
  variants: {
    type: {
      fill: "bg-opacity-80 text-white border-opacity-0 hover:enabled:bg-opacity-100",
      outline: "text-opacity-100 border-opacity-100 hover:enabled:bg-opacity-5",
      text: "bg-opacity-0 text-opacity-100 border-opacity-0 hover:enabled:bg-opacity-5",
    },
    size: {
      sm: "px-2 py-1 rounded text-xs",
      md: "px-4 py-2 rounded text-base",
      lg: "px-6 py-3 rounded text-lg",
    },
  },
});

export default styles;
