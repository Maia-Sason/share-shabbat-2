const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { remark } from "remark";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkStringify from "remark-stringify";

const Editor = ({ setExportValue }) => {
  // TODO: Use this to edit and type new bless blocks, save from this to db and read in reactMarkdown
  const [value, setValue] = useState("");

  function htmlToMarkdown(htmlText) {
    const file = remark()
      .use(rehypeParse, { emitParseErrors: true, duplicateAttribute: false })
      .use(rehypeRemark)
      .use(remarkStringify)
      .processSync(htmlText);

    return String(file);
  }

  useEffect(() => {
    setExportValue(htmlToMarkdown(value));
  }, [setExportValue, value]);

  return (
    <div className="min-h-[300px] rounded-2xl border border-accent relative overflow-hidden flex ">
      <ReactQuill
        style={{ width: "100%" }}
        defaultValue="Enter a blessing"
        theme="snow"
        onChange={setValue}
      />
    </div>
  );
};

export default Editor;
