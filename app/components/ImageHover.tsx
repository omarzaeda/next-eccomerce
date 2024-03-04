"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ImageHover = ({ product }) => {
    const [imageHover, setImageHover] = useState(false)
    return (
        <div onMouseEnter={() => setImageHover(!imageHover)} onMouseLeave={() => setImageHover(!imageHover)} className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 hover:transition-opacity duration-500">
            {imageHover ?
                <Image
                    src={product.imageUrl2}
                    alt="Product image"
                    className="w-full h-full object-cover object-top lg:h-full lg:w-full"
                    width={300}
                    height={300}
                /> : <Image
                    src={product.imageUrl}
                    alt="Product image"
                    className="w-full h-full object-cover object-top lg:h-full lg:w-full"
                    width={300}
                    height={300}
                />}
        </div>
    )
}

export default ImageHover