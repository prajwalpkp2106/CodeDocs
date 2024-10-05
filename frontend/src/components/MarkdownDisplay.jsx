/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

const MarkdownDisplay = ({ mdcontent }) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    setMarkdown(mdcontent);
  }, [mdcontent]);

  // Function to download markdown content as a .md file
  const downloadMarkdownFile = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "content.md";
    link.click();
    URL.revokeObjectURL(url); // Clean up
  };

  // Function to display the "Copy to Clipboard" button and logic
  const renderCodeBlock = ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    const codeContent = String(children).replace(/\n$/, ""); // Trim trailing newline

    return !inline && match ? (
      <div className="relative mb-6">
        <SyntaxHighlighter
          style={materialDark}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {codeContent}
        </SyntaxHighlighter>
        <CopyToClipboard text={codeContent}>
          <button
            className="absolute top-2 right-2 bg-green-600 text-gray-300 px-3 py-1 rounded-md hover:bg-green-700 transition duration-200"
            title="Copy to Clipboard"
          >
            Copy
          </button>
        </CopyToClipboard>
      </div>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  };

  return (
    <div className="border-4 border-gray-300 mt-6">
      <h1 className="text-2xl font-bold mb-4 text-green-400 text-center pt-12">Documentation</h1>
      {/* Render Markdown with custom code block renderer */}
      <ReactMarkdown
        components={{
          code: renderCodeBlock,
        }}
        className="text-gray-300"
      >
        {markdown}
      </ReactMarkdown>

      {/* Button to download the markdown file */}
      <button
        onClick={downloadMarkdownFile}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          background: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        className="mb-4"
      >
        Download Markdown File
      </button>
    </div>
  );
};

MarkdownDisplay.propTypes = {
  mdcontent: PropTypes.string.isRequired,
};

export default MarkdownDisplay;