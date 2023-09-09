"use client";
import Box from "@/ui/Box";
type TextboxProps = {
  value: string;
  setValue: (value: string) => void;
};

const TextBox = ({ value, setValue }: TextboxProps) => {
  return (
    <Box>
      <textarea
        className="w-full h-full p-2"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </Box>
  );
};

export default TextBox;
