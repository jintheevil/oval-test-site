'use client';
import {useEffect, useState} from 'react';
import {Spinner} from "@nextui-org/react";
import Image from "next/image"
import { getDownloadURL, ref } from '@firebase/storage';
import { storage } from '@/firebase';
import {StaticImageData} from "next/image";

export default function ProductImage({ productImgPath }: { productImgPath: StaticImageData }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const getImage = async (url: string) => {
    try {
      const storageRef = ref(storage, url);
      const imageUrl = await getDownloadURL(storageRef); // Fix here, use a different variable name
      setImageUrl(imageUrl);
    } catch (error) {
      console.error('Error getting image URL:', error);
    }
  };

  // Fetch the image URL when the component is rendered
  useEffect(() => {
    if (!imageUrl) {
      // getImage(productImgPath);
    }
  }, [imageUrl, productImgPath]);

  return productImgPath ? <Image className={"h-[160px] w-auto"} src={productImgPath} alt="#"/> : <Spinner size={"lg"}></Spinner>;
}
