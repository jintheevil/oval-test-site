'use client'

import {Card, CardBody, CardHeader, Divider, Spinner} from "@nextui-org/react";
import {useSearchParams} from "next/navigation";
import {db} from "@/firebase";
import {getDoc, doc} from "@firebase/firestore";
import {useEffect, useState} from "react";
import ProductPageImage from "@/app/components/ProductPageImage";
import {StaticImageData} from "next/image";
import TestImage1 from "@/public/assets/test/productTestImage1.png";
import TestImage2 from "@/public/assets/test/productTestImage2.png";
import TestImage3 from "@/public/assets/test/productTestImage3.png";
import TestImage4 from "@/public/assets/test/productTestImage4.png";

type Params = {
  brand: string,
  productID: string,
}

export default function ProductPage({params}: {params: Params}) {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    productTitle: "FLOWMETERS",
    productSubtitle: "Positive Displacement Flowmeters",
    productDescription: "In principle, positive displacement flowmeters requires no external energy such as electricity. The flowrate is calculated from the number of revolutions of a rotor(s) activated by the energy of the fluid. Generally, positive displacement flowmeters offer high accuracy measurement and are suitable for totaling the flowrate. Accordingly they are used in various kinds of applications including industrial instruments. Especially, since their use was approved for taxable transactions of petroleum products by the National Tax Agency in Japan, positive displacement flowmeters have been assuming a significant role in the field of certified custody transfer.",
    productPageDesc: "In principle, positive displacement flowmeters requires no external energy such as electricity. The flowrate is calculated from the number of revolutions of a rotor(s) activated by the energy of the fluid. Generally, positive displacement flowmeters offer high accuracy measurement and are suitable for totaling the flowrate. Accordingly they are used in various kinds of applications including industrial instruments. Especially, since their use was approved for taxable transactions of petroleum products by the National Tax Agency in Japan, positive displacement flowmeters have been assuming a significant role in the field of certified custody transfer.",
    productTags: [],
    productPageSectionTitle: "ULTRA OVAL Type S",
    productPageSectionDesc: "\"A highly accurate positive displacement flowmeter capable of supporting a wide range of applications including water, petroleum, solvent, etc.\n" +
        "Instantaneous and total flowrates can be indicated in the field and signal output is also available.\"",
    productPageSectionImg: null as unknown as StaticImageData,
    productPageImgPath: TestImage1,
    productPageSectionTitle2: "Features",
    productPageSectionDesc2: "Enlarged display! Easily viewable!",
    productPageSectionImg2: TestImage2,
    productPageSectionTitle3: "GENERAL SPECIFICATIONS",
    productPageSectionDesc3: "",
    productPageSectionImg3: TestImage3,
    productPageSectionImg4: TestImage4,
  });
  const searchParams = useSearchParams();
  const id: string = searchParams.get("id")!;

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     try {
  //       const querySnapshot = doc(db, "products", params.brand.replace('%20', ' '), "catalogue", id);
  //       const docData = await getDoc(querySnapshot);
  //
  //       if (docData.exists()) {
  //         setProduct(docData.data() as any);
  //       }
  //       setLoading(false)
  //     } catch (error) {
  //       setLoading(false)
  //       console.log(error)
  //     }
  //   };
  //
  //   getData();
  // }, [id, params.brand]);


  return (
      <div className={"min-h-[100dvh] bg-gray-100 grid gap-4 place-items-center p-20"}>
        {loading && <Spinner size={'lg'}></Spinner>}
        {!loading && <div className={"w-[80%] grid grid-cols-2 gap-4"}>
            <div>
                <ProductPageImage productImgPath={product.productPageImgPath}></ProductPageImage>
            </div>
            <Card>
                <CardHeader className={"flex-col gap-5"}>
                    <h1 className={"text-3xl font-bold"}>
                      {product.productTitle}
                    </h1>
                    <p className={"text-md"}>
                      {product.productSubtitle}
                    </p>
                    <Divider></Divider>
                </CardHeader>
                <CardBody className={"p-5 text-left"}>
                    <p>
                      {product.productPageDesc}
                    </p>
                    <div className={"flex flex-wrap gap-5 mt-5"}>
                      {product.productTags?.map((tag, index) => {
                        return (
                            <div key={index} className={"p-2 bg-blue-500 text-white"}>
                              {tag}
                            </div>
                        )
                      })}
                    </div>
                </CardBody>
            </Card>
        </div>}
        {product.productPageSectionTitle &&
            <Card className={"w-[80%] p-5"}>
                <CardHeader>
                    <h1 className={"text-2xl font-semibold"}>
                      {product.productPageSectionTitle}
                    </h1>
                </CardHeader>
                <Divider></Divider>
                <CardBody className={"p-5"}>
                    <p>
                      {product.productPageSectionDesc}
                    </p>
                    {/*<div>*/}
                    {/*    <ProductPageImage productImgPath={product.productPageSectionImg}></ProductPageImage>*/}
                    {/*</div>*/}
                </CardBody>
            </Card>
        }
        {product.productPageSectionTitle2 &&
            <Card className={"w-[80%] p-5"}>
                <CardHeader>
                    <h1 className={"text-2xl font-semibold"}>
                      {product.productPageSectionTitle2}
                    </h1>
                </CardHeader>
                <Divider></Divider>
                <CardBody className={"p-5"}>
                    <p>
                      {product.productPageSectionDesc2}
                    </p>
                    <div>
                        <ProductPageImage productImgPath={product.productPageSectionImg2}></ProductPageImage>
                    </div>
                </CardBody>
            </Card>
        }
        {product.productPageSectionTitle3 &&
            <Card className={"w-[80%] p-5"}>
                <CardHeader>
                    <h1 className={"text-2xl font-semibold"}>
                      {product.productPageSectionTitle3}
                    </h1>
                </CardHeader>
                <Divider></Divider>
                <CardBody className={"p-5"}>
                    <p>
                      {product.productPageSectionDesc3}
                    </p>
                    <div>
                        <ProductPageImage productImgPath={product.productPageSectionImg3}></ProductPageImage>
                    </div>
                    <div>
                        <ProductPageImage productImgPath={product.productPageSectionImg4}></ProductPageImage>
                    </div>
                </CardBody>
            </Card>
        }
      </div>
  )
}
