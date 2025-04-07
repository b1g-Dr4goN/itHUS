import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CodeLanguage } from "../consts/codeblock/codeblockEnum";
import type { CodeFile } from "../consts/codeblock/codeblockType";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import JavaScriptIcon from "../assets/javascript-r.svg?react";
import PythonIcon from "../assets/python-5.svg?react";
import CPPIcon from "../assets/c.svg?react";
import CIcon from "../assets/c-1.svg?react";
import JavaIcon from "../assets/java-4.svg?react";
import TypeScriptIcon from "../assets/typescript.svg?react";
import SQLIcon from "../assets/mysql-logo-pure.svg?react";

const languageConfig: Record<
  CodeLanguage,
  { label: string; Icon: React.ElementType }
> = {
  [CodeLanguage.JavaScript]: { label: "JavaScript", Icon: JavaScriptIcon },
  [CodeLanguage.TypeScript]: { label: "TypeScript", Icon: TypeScriptIcon },
  [CodeLanguage.Python]: { label: "Python", Icon: PythonIcon },
  [CodeLanguage.Java]: { label: "Java", Icon: JavaIcon },
  [CodeLanguage.Cpp]: { label: "C++", Icon: CPPIcon },
  [CodeLanguage.C]: { label: "C", Icon: CIcon },
  [CodeLanguage.Sql]: { label: "SQL", Icon: SQLIcon },
};

type Props = {
  files: CodeFile[];
};

const CodeBlock = ({ files }: Props) => {
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const activeFile = files[activeFileIndex];

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeFile.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="rounded-lg overflow-hidden border shadow bg-[#1e1e1e] text-white my-4">
      <div className="flex items-center gap-2 px-4 py-2 justify-between font-mono bg-black/50 border-b border-white/10 text-sm uppercase tracking-wider text-[#cccccc]">
        <div className="flex bg-[#2b2b2b] border-b border-white/10">
          {files.map((file, i) => {
            const Icon = languageConfig[file.language].Icon;
            return (
              <button
                key={file.filename}
                onClick={() => setActiveFileIndex(i)}
                className={`px-4 py-2 text-sm flex items-center gap-2 border-r border-white/10 ${
                  i === activeFileIndex
                    ? "bg-black/30 text-white"
                    : "text-white/60 hover:bg-[#333]"
                }`}
              >
                {languageConfig[file.language].Icon && (
                  <Icon className="w-4 h-4" />
                )}
                {file.filename}
              </button>
            );
          })}
        </div>
        <button
          onClick={handleCopy}
          className="text-xs bg-white/15 hover:bg-white/25 px-2 py-1 rounded text-white"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter
        language={activeFile.language}
        style={tomorrow}
        customStyle={{
          margin: 0,
          padding: "1.5rem 1rem",
          background: "transparent",
        }}
      >
        {activeFile.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
