"use client";
import Box from "@/ui/Box";

const PreviewBox = ({ htmlContent }: { htmlContent: string }) => {
  const trustedHtml = {
    __html: htmlContent.replaceAll(
      "<br>",
      '<div style="margin-bottom: 12.5px">\n</div>',
    ),
  };
  return (
    <Box>
      <div dangerouslySetInnerHTML={trustedHtml}></div>
    </Box>
  );
};

export default PreviewBox;
