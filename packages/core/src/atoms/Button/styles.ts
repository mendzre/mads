import type {
  ButtonVariant,
  ComposeButtonVariant,
  SizeVariant,
} from "mads-types";
import { defineClass } from "../../utils/mads";

const { fill, outline, text }: Record<ButtonVariant, string> = {
  fill: "bg-opacity-80 text-white hover:enabled:bg-opacity-100",
  outline: "border-opacity-100 hover:enabled:bg-opacity-5",
  text: "hover:enabled:bg-opacity-5",
};
const { sm, md, lg }: Record<SizeVariant, string> = {
  sm: "gap-1 px-2 py-1 rounded text-xs",
  md: "gap-2 px-4 py-2 rounded text-base",
  lg: "gap-3 px-6 py-3 rounded text-lg",
};

const styles = defineClass<ComposeButtonVariant>({
  base: "flex items-center justify-center w-fit bg-mads text-mads text-opacity-100 border border-mads border-opacity-0 font-normal capitalize text-center leading-none disabled:opacity-50 transition-colors",
  variants: {
    "fill:sm": `${fill} ${sm}`,
    "fill:md": `${fill} ${md}`,
    "fill:lg": `${fill} ${lg}`,
    "outline:sm": `${outline} ${sm}`,
    "outline:md": `${outline} ${md}`,
    "outline:lg": `${outline} ${lg}`,
    "text:sm": `${text} ${sm}`,
    "text:md": `${text} ${md}`,
    "text:lg": `${text} ${lg}`,
  },
});

export default styles;
