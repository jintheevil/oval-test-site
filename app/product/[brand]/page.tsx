import BrandPage from "@/app/components/pages/BrandPage";

export async function generateStaticParams() {
  const brands = [
    {
      brand: "OVAL"
    },
    {
      brand: "DKK-TOA"
    },
    {
      brand: "FUKUDA"
    },
    {
      brand: "MAGNETROL"
    },
    {
      brand: "NDV"
    },
    {
      brand: "Nagano%20Keiki"
    },
    {
      brand: "OTHERS"
    }
  ];
  return brands
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: { params: { brand: string } }) {
  const { brand } = params

  return (
      <main>
        <BrandPage params={{brand}}></BrandPage>
      </main>
  )
}
