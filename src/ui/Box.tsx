"use client";
const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{ margin: "0 10px", padding: "1rem" }}
      className="w-full border rounded min-h-full"
    >
      {children}
    </div>
  );
};

export default Box;
