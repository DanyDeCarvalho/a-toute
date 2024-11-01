"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import ListOrdered from "@tiptap/extension-ordered-list";
import BlockQuote from "@tiptap/extension-blockquote";
import TextAlign from "@tiptap/extension-text-align";
import Paragraph from "@tiptap/extension-paragraph";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";

export default function Tiptap({ onChange, content }) {
  const handleChange = (newContent) => {
    onChange(newContent);
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Paragraph.configure({
        HTMLAttributes: {
          class: `inline`,
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph", "listItem"],
        alignments: ["left", "center", "right"],
      }),
      BlockQuote.configure({
        HTMLAttributes: { class: "italic font-semibold text-gray-900" },
      }),
      ListOrdered.configure({
        HTMLAttributes: { class: `list-decimal list-inside` },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: ` list-disc list-inside `,
        },
      }),
      Heading.configure({
        HTMLAttributes: { class: "text-xl", levels: [1, 2, 3, 4, 5, 6] },
      }),
      Color.configure({
        types: ["textStyle"],
      }),
    ],
    editorProps: {
      attributes: {
        class: `flex flex-col px-4 py-3 border-b has-list-disc border-r border-l border-gray-200 text-black w-full gap-3 font-small text-[14px] pt-4 rounded-bl-md rounded-br-md outline-none`,
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full">
      <Toolbar editor={editor} content={content} />
      <EditorContent style={{ whiteSpace: "pre-line " }} editor={editor} />
    </div>
  );
}
