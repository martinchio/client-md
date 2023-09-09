"use client";
import { useEffect, useState } from "react";
import * as marked from "marked";

import useLocalStorage from "@/hooks/localStorage";
import TextBox from "@/components/textbox/TextBox";
import PreviewBox from "@/components/previewbox/PreviewBox";

const markedOptions = {
  gfm: true,
  breaks: true,
};

export default function Home() {
  const [isClient, setIsClient] = useState(false); // New state
  const [md, setMd] = useLocalStorage();

  useEffect(() => {
    setIsClient(true);
  }, []);

  //We need to wait until we're sure we're on the client before we can render so that localstorage is available.
  if (!isClient) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-screen">
      <div className="border rounded p-8 shadow-md w-full">
        <div className="p-8 min-h-48 flex flex-row w-full">
          <TextBox value={md} setValue={setMd} />
          <PreviewBox htmlContent={marked.parse(md, markedOptions)} />
        </div>
      </div>
    </main>
  );
}
