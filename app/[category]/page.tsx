import React from 'react'
import { client } from '../lib/sanity';
import { simplifiedProduct } from '../interface';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ImageHover from '../components/ImageHover';
export const dynamic = "force-dynamic"
export const revalidate = 10;
async function getData(cateogry: string) {
    const query = `*[_type == "product" && category->name == "${cateogry}"] {
          _id,
            "imageUrl": images[0].asset->url,
            "imageUrl2": images[2].asset->url,
            price,
            name,
            "slug": slug.current,
            "category": category->name
        }`;

    const data = await client.fetch(query);

    return data;
}
const page = async ({
    params,
}: {
    params: { category: string };
}) => {
    const data: simplifiedProduct = await getData(params.category)
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Our Products for {params.category}
                    </h2>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.map((product) => (
                        <Link key={product._id} href={`/product/${product.slug}`}>
                            <div className="group relative">
                                <ImageHover product={product} />

                                <div className="mt-4 flex justify-between gap-3">
                                    <div>
                                        <h3 className="text-sm text-gray-700 line-clamp-1">
                                            {product.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {product.category}
                                        </p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                        ${product.price}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page