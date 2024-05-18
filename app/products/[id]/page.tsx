"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios';

interface Product {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate?: number;
    count?: number;
  }
}

export default function DetailProduct({ params }: any) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    getProductById();
  }, [params.id]);

  return (
    <>
      {product && (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <Image
                alt={product.title ?? "Product Image"}
                src={product.image ?? ""}
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                width={300}
                height={400}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {product.category}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.title}
                </h1>
                <p className="leading-relaxed">{product.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <span className="mr-3">Rating:</span>
                  <span>{product.rating?.rate}</span>
                  <span className="ml-1">({product.rating?.count} reviews)</span>
                </div>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Price:</span>
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ${product.price}
                    </span>
                  </div>
                </div>
                <button className="flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
