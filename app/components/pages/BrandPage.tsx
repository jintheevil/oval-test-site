'use client';

import {Card, CardBody, CardHeader, Divider, Link, Spinner} from "@nextui-org/react";
import Image from "next/image";
import HeroImage from "@/public/assets/pexels-tom-fisk-10396416.jpg";
import TestProduct from "@/public/assets/oval/8fe2aa_f2317a9e25f24919a739234b085b7055~mv2.jpg";
import {useEffect, useState} from "react";
// import {collection, getDocs} from "@firebase/firestore";
// import {db} from "@/firebase";
import {SubProducts} from "@/app/types";
import ProductImage from "@/app/components/ProductImage";

type Params = {
  brand: string
}

export default function BrandPage({ params }: { params: Params }) {
  const [products, setProducts] = useState<SubProducts[]>([
    {
      productName: 'FLOWMETERS',
      id: '1',
      productDesc: 'Positive Displacement Flowmeters',
      productImgPath: TestProduct,
    }
  ]);
  const [loading, setLoading] = useState(false);

  const paramName = (name: string) => {
    return name.toLowerCase().replaceAll(" ", "-");
  }

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       setLoading(true);
  //       const queryCollection = collection(db, "products", params.brand.replace('%20', ' '), "catalogue");
  //       const productsData: SubProducts[] = [];
  //       const querySnapshot = await getDocs(queryCollection);
  //
  //       querySnapshot.forEach((doc) => {
  //         productsData.push({
  //           id: doc.id,
  //           ...doc.data()
  //         } as SubProducts);
  //       });
  //
  //       // Update state with fetched products
  //       setProducts(productsData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };
  //
  //   getProducts();
  // }, [params, params.brand]);

  return (
      <div className={"min-h-[100dvh] bg-gray-100 text-black px-40 pb-10"}>
        <div className={"w-[100%] h-auto grid place-items-center relative mb-10"}>
          <Image src={HeroImage} alt={"mainHero"} className={"w-[100%] h-auto max-h-[60dvh] object-cover"}></Image>
          <div className={"w-full h-full absolute top-0 left-0 bg-gray-100 opacity-80 z-10 grid place-items-center"}>
            <h1 className={"text-8xl font-bold"}>{params.brand.replace('%20', ' ').toUpperCase()}</h1>
          </div>
        </div>
        <div className={"w-fit"}>
          {
              params.brand === "OVAL" &&
              <h1 className={"text-6xl"}>We add <b>VALUE</b> to the flow</h1>
          }
          <Divider className={"my-10"}></Divider>
        </div>
        { loading &&
            <div className={"w-[100%] grid place-items-center"}>
                <Spinner></Spinner>
            </div>
        }
        <div className={"w-full grid grid-cols-1 gap-10 lg:grid-cols-4"}>
          { products.map((product) => {
            return (
                <Card as={Link} href={"/product/" + params.brand + "/" + paramName(product.productName) + "?id=" + product.id} target={"_self"} isPressable={true} key={product.productName} className={"bg-gray-200 text-black hover:scale-105 cursor-pointer border-5 border-gray-400"}>
                  <CardHeader>
                    <div>
                      <h1 className={"text-md font-bold"}>
                        {product.productName}
                      </h1>
                      <p className={"text-sm"}>
                        {product.productDesc}
                      </p>
                    </div>
                  </CardHeader>
                  <Divider></Divider>
                  <CardBody className={"grid place-items-center"}>
                    <ProductImage productImgPath={product.productImgPath!}></ProductImage>
                  </CardBody>
                </Card>
            )
          })}
        </div>
      </div>
  )
}
