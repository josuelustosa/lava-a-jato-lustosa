import { AlignText, Margin } from "@/src/utils/types";

interface SubtitleProps {
  text: string;
  colorText?: string;
  alignText?: AlignText;
  colorLine?: string;
  alignLine?: Margin;
}

export default function Subtitle({
  text,
  colorText = "dark-blue",
  alignText = "center",
  colorLine = "main-blue",
  alignLine = "auto",
}: SubtitleProps) {
  return (
    <div className="mb-2 mt-2">
      <h1 className={`text-3xl text-${colorText} text-${alignText} mb-2`}>
        {text}
      </h1>
      <hr className={`w-64 text-${colorLine} m-${alignLine} border-2`} />
    </div>
  );
}
