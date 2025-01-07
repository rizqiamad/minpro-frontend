"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { FormikProps } from "formik";
import { FormValueEvent } from "@/types/form";

interface FieldThumbnailProps {
  name: string;
  formik: FormikProps<FormValueEvent>;
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
      setPreviewUrl(imageUrl);
    }
  };

  return (
    <div className={`flex w-full h-full flex-col gap-2 ${className}`}>
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
          className="relative w-full h-full cursor-pointer bg-center bg-cover"
        >
          <Image src={'https://assets.loket.com/images/banner-event.jpg'} alt="Banner Event" fill />
          <div className="absolute gap-2 flex flex-col items-center top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%]">
            <span className="text-6xl text-white">
              +
            </span>
            <p className="font-semibold text-4xl text-white"> gambar/poster/banner</p>
            <p className="font-semibold text-white text-center">Direkomendasikan 724 x 340px dengan tidak lebih dari 2 mb</p>
          </div>
        </div>
      ) : (
        <div
          onClick={() => imgRef.current?.click()}
          className="overflow-hidden w-full h-full relative cursor-pointer"
        >
          <Image
            src={previewUrl}
            alt="Preview"
            width={200}
            height={200}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      )}
    </div>
  );
};