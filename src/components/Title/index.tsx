interface TitleProps {
  text: string;
  colorText?: string;
  colorLine?: string;
}

export default function Title({
  text,
  colorText = "dark-blue",
  colorLine = "main-blue",
}: TitleProps) {
  return (
    <div className="mb-2 mt-2">
      <h1
        className={`text-4xl text-${colorText} text-center mb-2 max-w-4xl m-auto`}
      >
        {text}
      </h1>
      <hr className={`w-64 text-${colorLine} m-auto border-solid border-2`} />
    </div>
  );
}
