"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { FormikProps } from "formik";

interface FieldThumbnailProps {
  name: string;
  formik: FormikProps<any>;
  className?: string;
}

export const FieldThumbnail: React.FC<FieldThumbnailProps> = ({
  name,
  formik,
  className = "",
}) => {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    console.log(file)
    if (file) {
      formik.setFieldValue(name, file);
      const imageUrl = URL.createObjectURL(file);
      console.log(imageUrl)
      setPreviewUrl(imageUrl);
    }
  };

  return (
    <div className={`flex w-full flex-col gap-2 ${className}`}>
      <input
        type="file"
        id={name}
        name={name}
        className="hidden"
        ref={imgRef}
        onChange={handleChange}
        onSubmit={() => setPreviewUrl(null)}
        accept="image/png, image/jpeg, image/jpg, image/webp"
      />
      {!previewUrl ? (
        <div
          onClick={() => imgRef.current?.click()}
          className="flex w-full h-80 justify-center items-center border border-gray-500 border-dashed rounded-md cursor-pointer"
        >
          +
        </div>
      ) : (
        <div
          onClick={() => imgRef.current?.click()}
          className="flex w-full h-80 justify-center items-center border border-gray-500 border-dashed rounded-md cursor-pointer"
        >
          <Image
            src={previewUrl}
            alt="Preview"
            width={200}
            height={200}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
};