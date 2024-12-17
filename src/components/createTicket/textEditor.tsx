"use client";

import React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { FormValueTicketEvent } from "@/types/form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [
      { list: "ordered" },
      { list: "bullet" },
    ],
  ],
};

const formats = [
  "list",
  "bullet",
];

interface FieldRichTextProps {
  setFieldValue: (a: any, b: any) => void
  values: FormValueTicketEvent
}

const TicketDescription: React.FC<FieldRichTextProps> = ({ setFieldValue, values }) => {

  const handleChange = (e: string) => {
    setFieldValue('description', e);
  };

  return (
    <ReactQuill
      value={values.description}
      onChange={handleChange}
      modules={modules}
      formats={formats}
    />
  );
};

export default TicketDescription;