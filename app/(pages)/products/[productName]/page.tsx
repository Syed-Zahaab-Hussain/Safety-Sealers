"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { productsArray } from "../productContact";

type Property = {
  name: string;
  explanations: string[];
};

type Product = {
  name: string;
  description: string;
  image: string;
  properties: Property[];
};

type Params = {
  productName: string;
};

const ProductDescription = ({ params }: { params: Params }) => {
  const { productName } = params;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    console.log(productName);
    const foundProduct = productsArray.find(
      (item) => item.name === productName.replace("-", " ")
    );
    setProduct(foundProduct || null);
  }, [productName]);

  return (
    <>
      {/* Heading */}
      <div className="bg-red-600 h-52 flex items-center pl-12">
        {product ? (
          <h1 className="text-white text-4xl font-bold">{product.name}</h1>
        ) : (
          <h1 className="text-white text-4xl font-bold">Product not found</h1>
        )}
      </div>
      {/* Description */}
      <div className="w-full p-16">
        {product && (
          <Card className="border-none">
            <CardContent className="flex flex-col md:flex-row gap-16">
              <div className="w-full md:w-1/2">
                {product.properties &&
                  product.properties.map((property, index) => (
                    <div key={index} className="mb-8">
                      <div className="flex gap-4 items-center mb-4">
                        <h2 className="text-xl font-semibold">
                          {property.name}
                        </h2>
                        <div className="w-8 h-1 bg-background-main mt-1" />
                      </div>
                      <div className="pl-4">
                        {property.explanations.map((explain, subIndex) => (
                          <div
                            key={subIndex}
                            className="flex items-center mb-2"
                          >
                            <span className="mr-2">→</span>
                            <p>{explain}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">
                    {product.name}
                    <div className="w-8 h-1 bg-background-main mt-1" />
                  </h2>
                  <p>{product.description}</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default ProductDescription;
