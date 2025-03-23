import React, { useState, useRef } from "react";
import { useEditor, EditorContent, Editor, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import { Button } from "../ui/button";
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Minus,
  Link as LinkIcon,
  Image as ImageIcon,
} from "lucide-react";
import { Input } from "../ui/input";

// Initialize lowlight with common languages
const lowlight = createLowlight(common);

interface BubbleMenuProps {
  editor: Editor;
}

const EditorBubbleMenu = ({ editor }: BubbleMenuProps) => {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const addLink = () => {
    const url = window.prompt("Enter URL");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const addImage = () => {
    const url = window.prompt("Enter image URL");
    if (url) {
      editor.chain().focus().setImage({ src: url, alt: "Image" }).run();
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (readerEvent) => {
        const imageUrl = readerEvent.target?.result as string;
        editor
          .chain()
          .focus()
          .setImage({ src: imageUrl, alt: file.name })
          .run();
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={imageInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleImageUpload}
      />
      <BubbleMenu
        editor={editor}
        tippyOptions={{ duration: 100 }}
        className="flex items-center gap-1 p-1 rounded-lg bg-black border border-gray-700 shadow-xl"
      >
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 hover:bg-white/10 rounded ${
            editor.isActive("bold") ? "bg-white/20" : ""
          }`}
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 hover:bg-white/10 rounded ${
            editor.isActive("italic") ? "bg-white/20" : ""
          }`}
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-2 hover:bg-white/10 rounded ${
            editor.isActive("strike") ? "bg-white/20" : ""
          }`}
        >
          <Strikethrough className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`p-2 hover:bg-white/10 rounded ${
            editor.isActive("code") ? "bg-white/20" : ""
          }`}
        >
          <Code className="w-4 h-4" />
        </button>
        <div className="w-[1px] h-4 bg-gray-700 mx-1" />
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`p-2 hover:bg-white/10 rounded ${
            editor.isActive("heading", { level: 1 }) ? "bg-white/20" : ""
          }`}
        >
          <Heading1 className="w-4 h-4" />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`p-2 hover:bg-white/10 rounded ${
            editor.isActive("heading", { level: 2 }) ? "bg-white/20" : ""
          }`}
        >
          <Heading2 className="w-4 h-4" />
        </button>
        <div className="w-[1px] h-4 bg-gray-700 mx-1" />
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 hover:bg-white/10 rounded ${
            editor.isActive("bulletList") ? "bg-white/20" : ""
          }`}
        >
          <List className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 hover:bg-white/10 rounded ${
            editor.isActive("orderedList") ? "bg-white/20" : ""
          }`}
        >
          <ListOrdered className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 hover:bg-white/10 rounded ${
            editor.isActive("blockquote") ? "bg-white/20" : ""
          }`}
        >
          <Quote className="w-4 h-4" />
        </button>
        <div className="w-[1px] h-4 bg-gray-700 mx-1" />
        <button
          onClick={addLink}
          className={`p-2 hover:bg-white/10 rounded ${
            editor.isActive("link") ? "bg-white/20" : ""
          }`}
        >
          <LinkIcon className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="p-2 hover:bg-white/10 rounded"
        >
          <Minus className="w-4 h-4" />
        </button>
      </BubbleMenu>

      {/* Fixed Image Toolbar */}
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-2 p-2 rounded-lg bg-black border border-gray-700 shadow-xl">
        <button
          onClick={addImage}
          className="p-2 hover:bg-white/10 rounded flex items-center gap-2"
        >
          <ImageIcon className="w-4 h-4" />
          <span className="text-sm">Add Image URL</span>
        </button>
      </div>
    </div>
  );
};

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2],
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc ml-4",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ml-4",
          },
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-500 hover:text-blue-600 underline",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "rounded-lg max-w-full h-auto my-4",
        },
        allowBase64: true,
      }),
      Placeholder.configure({
        placeholder: "Write your blog post here...",
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none focus:outline-none min-h-[500px] px-4",
      },
    },
  });

  if (!editor) {
    return null;
  }

  const hanlePublish = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(title);
    console.log(editor.getHTML());
  };

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-4xl mx-auto p-4">
        <div className="rounded-lg border border-gray-700 overflow-hidden">
          <div className="border-b border-gray-700">
            <Input
              placeholder="Enter your blog title..."
              className="border-0 text-4xl px-4 py-3 bg-transparent placeholder:text-gray-500 focus-visible:ring-0"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="py-3">
            <EditorBubbleMenu editor={editor} />
            <style>{`
              .ProseMirror > * + * {
                margin-top: 0.75em;
              }
              
              .ProseMirror h1 {
                font-size: 2em;
                font-weight: bold;
                margin-top: 1em;
                margin-bottom: 0.5em;
              }
              
              .ProseMirror h2 {
                font-size: 1.5em;
                font-weight: bold;
                margin-top: 1em;
                margin-bottom: 0.5em;
              }
              
              .ProseMirror ul,
              .ProseMirror ol {
                padding: 0 1rem;
              }
              
              .ProseMirror ul {
                list-style-type: disc;
              }
              
              .ProseMirror ol {
                list-style-type: decimal;
              }
              
              .ProseMirror ul[data-type="taskList"] {
                list-style: none;
                padding: 0;
              }
              
              .ProseMirror img {
                display: block;
                max-width: 100%;
                height: auto;
                margin: 1rem 0;
              }
              
              .ProseMirror p.is-editor-empty:first-child::before {
                color: #adb5bd;
                content: attr(data-placeholder);
                float: left;
                height: 0;
                pointer-events: none;
              }
            `}</style>
            <div className="min-h-[500px]">
              <EditorContent editor={editor} />
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end gap-4">
          <Button variant="outline">Cancel</Button>
          <Button onClick={hanlePublish}>Publish</Button>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
