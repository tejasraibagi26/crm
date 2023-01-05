import React, { useRef, useState } from "react";
import "./editor.css";

const BLOCK_TYPES = [
  { label: "H1", tag: "h1" },
  { label: "H2", tag: "h2" },
  { label: "H3", tag: "h3" },
  { label: "H4", tag: "h4" },
  { label: "H5", tag: "h5" },
  { label: "H6", tag: "h6" },
  { label: "Blockquote", tag: "blockquote" },
  { label: "UL", tag: "ul" },
  { label: "OL", tag: "ol" },
  { label: "Code Block", tag: "pre" },
];

const INLINE_STYLES = [
  { label: "Bold", style: "bold" },
  { label: "Italic", style: "italic" },
  { label: "Underline", style: "underline" },
  { label: "Monospace", style: "monospace" },
];

function RichTextEditor() {
  const editorRef = useRef<HTMLDivElement>(null);
  const [editorState, setEditorState] = useState<any>({
    blockType: BLOCK_TYPES[0],
    inlineStyles: [],
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && event.shiftKey === false) {
      event.preventDefault();
      document.execCommand("insertHTML", false, "<br><br>");
    }
  };

  const toggleInlineStyle = (inlineStyle: { label: string; style: string }) => {
    document.execCommand(inlineStyle.style, false, undefined);
    setEditorState((prevState: any) => ({
      ...prevState,
      inlineStyles: prevState.inlineStyles.includes(inlineStyle)
        ? prevState.inlineStyles.filter((style: any) => style !== inlineStyle)
        : [...prevState.inlineStyles, inlineStyle],
    }));
  };

  const toggleBlockStyle = (blockType: { label: string; tag: string }) => {
    document.execCommand(blockType.label, false, undefined);
    setEditorState((prevState: any) => ({
      ...prevState,
      blockType,
    }));
  };

  const addBlock = () => {
    const selection = window.getSelection();
    if (selection) {
      const range = selection.getRangeAt(0);
      const block = document.createElement(editorState.blockType.tag);
      range.surroundContents(block);
      editorRef.current?.focus();
    }
  };

  return (
    <div className="rich-text-editor" onKeyDown={handleKeyDown} ref={editorRef}>
      <div className="toolbar">
        {BLOCK_TYPES.map((blockType) => (
          <button
            key={blockType.label}
            type="button"
            className={blockType === editorState.blockType ? "active" : ""}
            onClick={() => toggleBlockStyle(blockType)}
          >
            {blockType.label}
          </button>
        ))}
        {INLINE_STYLES.map((inlineStyle) => (
          <button
            key={inlineStyle.label}
            type="button"
            className={
              editorState.inlineStyles.includes(inlineStyle) ? "active" : ""
            }
            onClick={() => toggleInlineStyle(inlineStyle)}
          >
            {inlineStyle.label}
          </button>
        ))}
        <button type="button" onClick={addBlock}>
          Add Block
        </button>
      </div>
      <div className="editor" contentEditable>
        Edit me!
      </div>
    </div>
  );
}

export default RichTextEditor;
