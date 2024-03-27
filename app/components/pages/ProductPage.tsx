'use client'

import {Card, CardBody, CardHeader, Divider, Spinner} from "@nextui-org/react";
import {useSearchParams} from "next/navigation";
import {db} from "@/firebase";
import {getDoc, doc} from "@firebase/firestore";
import {useEffect, useState} from "react";
import ProductPageImage from "@/app/components/ProductPageImage";

type Params = {
  brand: string,
  productID: string,
}

export default function ProductPage({params}: {params: Params}) {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({
    productTitle: "",
    productSubtitle: "",
    productDescription: "",
    productPageDesc: "",
    productTags: [],
    productPageSectionTitle: "",
    productPageSectionDesc: "",
    productPageImgPath: "",
  });
  const searchParams = useSearchParams();
  const id: string = searchParams.get("id")!;

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const querySnapshot = doc(db, "products", params.brand.replace('%20', ' '), "catalogue", id);
        const docData = await getDoc(querySnapshot);

        if (docData.exists()) {
          setProduct(docData.data() as any);
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    };

    getData();
  }, [id, params.brand]);


  return (
      <div className={"min-h-[100dvh] bg-gray-100 grid gap-4 place-items-center p-20"}>
        {loading && <Spinner size={'lg'}></Spinner>}
        {!loading && <div className={"w-[80%] grid grid-cols-2 gap-4"}>
            <div>
                <ProductPageImage productImgPath={product.productPageImgPath}></ProductPageImage>
            </div>
            <Card>
                <CardHeader className={"flex-col gap-5"}>
                    <h1 className={"text-4xl font-bold"}>
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
                </CardBody>
            </Card>
        }
      </div>
  )
}
