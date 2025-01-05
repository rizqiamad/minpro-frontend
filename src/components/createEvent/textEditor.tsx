"use client";

import React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { FormValueEvent } from "@/types/form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
];

interface FieldRichTextProps {
  setFieldValue: (a: string, b: string) => void
  values: FormValueEvent
  name: keyof FormValueEvent
}

const RichTextEditor: React.FC<FieldRichTextProps> = ({ setFieldValue, name, values }) => {

  const handleChange = (e: string) => {
    setFieldValue(name, e);
  };

  return (
    <ReactQuill
      value={values[name] as string}
      onChange={handleChange}
      modules={modules}
      formats={formats}
    />
  );
};

export default RichTextEditor;