import ProductPage from "@/app/components/pages/ProductPage";
import {Suspense} from "react";

export async function generateStaticParams() {
  const brands = [
    {
      brand: "OVAL",
      productID: "oval-vortex-flowmeter"
    },
    {
      brand: "OVAL",
      productID: "oval-coriolis-mass-flowmeter"
    },
    {
      brand: "OVAL",
      productID: "oval-positive-displacement-flowmeter"
    },
    {
      brand: "OVAL",
      productID: "oval-ultrasonic-flowmeter"
    },
    {
      brand: "OVAL",
      productID: "oval-electronics-instruments"
    },
    {
      brand: "OVAL",
      productID: "oval-turbine-flowmeter"
    },
    {
      brand: "OVAL",
      productID: "batch-counter-non-explosionproof"
    },
    {
      brand: "DKK-TOA",
      productID: "automatic-water-quality-measurement-system-for-tap-water"
    },
    {
      brand: "DKK-TOA",
      productID: "oil-film-detector-(long-distance-type)"
    },
    {
      brand: "DKK-TOA",
      productID: "panel-type-ph-orp-controller"
    },
    {
      brand: "DKK-TOA",
      productID: "portable-multi-item-water-quality-meter"
    },
    {
      brand: "DKK-TOA",
      productID: "automatic-titrator"
    },
    {
      brand: "FUKUDA",
      productID: "msz-0700-series"
    },
    {
      brand: "FUKUDA",
      productID: "hes-2000-series"
    },
    {
      brand: "FUKUDA",
      productID: "fl-610-series"
    },
    {
      brand: "FUKUDA",
      productID: "flz-0220-series"
    },
    {
      brand: "MAGNETROL",
      productID: "echotel%C2%AE-910-ultrasonic-level-switch"
    },
    {
      brand: "MAGNETROL",
      productID: "thermatel%C2%AE-td1-td2-thermal-dispersion-switches"
    },
    {
      brand: "MAGNETROL",
      productID: "e4-modulevel%C2%AE-liquid-level-transmitter"
    },
    {
      brand: "MAGNETROL",
      productID: "atlas%E2%84%A2-magnetic-level-indicator"
    },
    {
      brand: "MAGNETROL",
      productID: "non-contact-radar-model-r82-pulse-burst-radar-transmitter"
    },
    {
      brand: "NDV",
      productID: "diaphragm-valves"
    },
    {
      brand: "NDV",
      productID: "ball-valves"
    },
    {
      brand: "Nagano%20Keiki",
      productID: "sc__-diaphragm-seal-type-pressure-gauges-&-switches"
    },
    {
      brand: "Nagano%20Keiki",
      productID: "rb__-bimetal-thermometer"
    },
    {
      brand: "Nagano%20Keiki",
      productID: "ba,-bc,-be,-bg,-bj,-bl-process-industrial-pressure-gauges"
    },
    {
      brand: "Nagano%20Keiki",
      productID: "ce15-electronic-pressure-switch"
    },
    {
      brand: "OTHERS",
      productID: "gx-9000"
    },
    {
      brand: "OTHERS",
      productID: "variable-area-flowcell"
    },
    {
      brand: "OTHERS",
      productID: "omni-4000-7000-series"
    },
    {
      brand: "OTHERS",
      productID: "pitocell-flowmeter"
    },
    {
      brand: "OTHERS",
      productID: "dbb-orifice-fitting"
    },
    {
      brand: "OTHERS",
      productID: "asco%E2%84%A2-210-2-way-solenoid-valves"
    }
  ];
  return brands
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: { params: { brand: string, productID: string } }) {
  const { brand, productID } = params

  return (
      <main>
        <Suspense>
          <ProductPage params={{brand, productID}}></ProductPage>
        </Suspense>
      </main>
  )
}
