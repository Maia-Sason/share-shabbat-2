import ReactMarkdown from "react-markdown";
import ReactMarkdownStyles from "../../../styles/ReactMarkdownStyles.module.css";
import remarkGfm from "remark-gfm";
import Avatar from "../LiveRoom/Avatar";
const people = [
  { image: "", name: "ABC", online: true },
  { image: "", name: "ABC", online: true },
  { image: "", name: "ABC", online: true },
  { image: "", name: "ABC", online: false },
  { image: "", name: "ABC", online: true },
];
const Reader = ({ markdown, loading }) => (
  <div className="card bg-white">
    <div className="card-body">
      {loading ? (
        <progress className="progress w-3/4"></progress>
      ) : (
        <ReactMarkdown
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          className={ReactMarkdownStyles.markdown}
        >
          {markdown}
        </ReactMarkdown>
      )}
    </div>
  </div>
);

export default Reader;
