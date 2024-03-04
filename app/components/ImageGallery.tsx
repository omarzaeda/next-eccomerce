"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface iAppProps {
    images: any;
}

export default function ImageGallery({ images }: iAppProps) {
    const [bigImage, setBigImage] = useState(images[0]);

    const handleSmallImageClick = (image: any) => {
        setBigImage(image);
    };
    return (
        <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {images.map((image: any, idx: any) => (
                    <div key={idx} className="overflow-hidden rounded-lg">
                        <Image
                            src={urlFor(image).url()}
                            width={80}
                            height={80}
                            alt="photo"
                            className="h-full lg:h-[80px] object-cover object-top lg:object-center cursor-pointer"
                            onClick={() => handleSmallImageClick(image)}
                        />
                    </div>
                ))}
            </div>

            <div className="relative overflow-hidden rounded-lg lg:col-span-4">
                <Image
                    src={urlFor(bigImage).url()}
                    alt="Photo"
                    width={300}
                    height={300}
                    className="h-full lg:h-[700px] w-full object-cover object-top"
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                    Sale
                </span>
            </div>
        </div>
    );
}
