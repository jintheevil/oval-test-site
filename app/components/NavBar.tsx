'use client';

import Link from "next/link";
import {collection, getDocs} from "@firebase/firestore";
import {db} from "@/firebase";
import {useEffect, useState} from "react";
import {Products, SubProducts} from "@/app/types";
import {useDispatch, useSelector} from "react-redux";
import {selectOptions} from "@/lib/modules/options/selector";
import {setLoaded, setNavBar} from "@/lib/features/options/optionsSlice";

export default function NavBar() {
  const [products, setProducts] = useState<Products[]>([]);
  const {initialLoading, navBar} = useSelector(selectOptions)
  const dispatch = useDispatch();

  const products2 = [
    {
      id: "OVAL",
      brandName: "OVAL",
      subProducts: [
        {
          id: '1Ghu8bExWK6EPXPz9tYn',
          productName: 'Oval Vortex Flowmeter',
        },
        {
          id: '2qp07HzgIxhedmRJiddr',
          productName: 'Oval Coriolis Mass Flowmeter',
        },
        {
          id: 'DOOdE75U5etKTxsW5Hc4',
          productName: 'Oval Positive Displacement Flowmeter',
        },
        {
          id: 'Kw0VstE7XvWmwBO2gCEd',
          productName: 'Oval Ultrasonic Flowmeter',
        },
        {
          id: 'XHp8J7SC6LZMpTMSgakt',
          productName: 'Oval Electronics Instruments',
        },
        {
          id: 'rc8UKIjn4HbEuTJHljOe',
          productName: 'Oval Turbine Flowmeter',
        },
        {
          id: 'zbSNZUOeLZ46QeDBSL6D',
          productName: 'BATCH COUNTER-Non-explosionproof',
        },
      ]
    },
    {
      id: "DKK-TOA",
      brandName: "DKK-TOA",
      subProducts: [
        {
          id: 'HjHIgiSfEpkhb4NWoIY0',
          productName: 'Simple fluoride ion monitor',
        },
        {
          id: 'IEakZdMVggKpVe8bpfK7',
          productName: 'Automatic water quality measurement system for tap water',
        },
        {
          id: 'NGIs4el1NTQosZXbPH1r',
          productName: 'Oil Film Detector (Long Distance Type)',
        },
        {
          id: 'mpfqZ0w5I3DmJpzvUsXP',
          productName: 'Panel-type pH-ORP controller',
        },
        {
          id: 'sSxF2S4QNypyrV8u9Gm4',
          productName: 'Portable multi-item water quality meter',
        },
        {
          id: 'y68Ysubvpdt9qplumqY6',
          productName: 'Automatic titrator',
        },
      ]
    },
    {
      id: 'FUKUDA',
      brandName: 'FUKUDA',
      subProducts: [
        {
          id: '9QG46WIHQLmBDMdopDw6',
          productName: 'MSZ-0700 series',
        },
        {
          id: 'FIF9L2q3PnFwIG3olnOA',
          productName: 'HES-2000 series',
        },
        {
          id: 'dWB4EqCwHWHzFd3jk63I',
          productName: 'FL-610 series',
        },
        {
          id: 'pkCytpusl6NJl72gnsIF',
          productName: 'FLZ-0220 series',
        },
      ]
    },
    {
      id: 'MAGNETROL',
      brandName: 'MAGNETROL',
      subProducts: [
        {
          id: 'B6O9jG0TD5o92yfABs27',
          productName: 'Echotel® 910 ultrasonic level switch',
        },
        {
          id: 'BoyzTz4jpvvnX5IDjghr',
          productName: 'Eclipse® 706 guided wave radar transmitter',
        },
        {
          id: 'QgSxLjjNlC1rFF5sT5ac',
          productName: 'Thermatel® TD1-TD2 thermal dispersion switches',
        },
        {
          id: 'WCtqvnZJN7CzstMtv8x4',
          productName: 'E4 Modulevel® liquid level transmitter',
        },
        {
          id: 'bpRglGTvT05UWenkbgNV',
          productName: 'Atlas™ magnetic level indicator',
        },
        {
          id: 'rPPz9whBXWWnQ3HHH8hs',
          productName: 'Non-contact radar model R82 pulse burst radar transmitter',
        },
      ]
    },
    {
      id: 'NDV',
      brandName: 'NDV',
      subProducts: [
        {
          id: 'QTeIlaDV6RDOtZwhpp6f',
          productName: 'Diaphragm Valves',
        },
        {
          id: 'w30SQxS3fuELKmxoz0RR',
          productName: 'Ball Valves',
        }
      ]
    },
    {
      id: 'Nagano Keiki',
      brandName: 'Nagano Keiki',
      subProducts: [
        {
          id: '73D8EC8ZWp1ZkdRLZggf',
          productName: 'SC__ Diaphragm-Seal Type Pressure Gauges & Switches',
        },
        {
          id: 'UzkfoUCG6zFVSs55yo67',
          productName: 'RB__ Bimetal Thermometer',
        },
        {
          id: 'avA9Uf0WNkySF91NeOVe',
          productName: 'BA, BC, BE, BG, BJ, BL Process Industrial Pressure Gauges',
        },
        {
          id: 'st7L41nCuZot18I0PMAz',
          productName: 'CE15 Electronic Pressure Switch',
        }
      ]
    },
    {
      id: 'OTHERS',
      brandName: 'OTHERS',
      subProducts: [
        {
          id: 'F2utjvHTlQtVj0l4qTq9',
          productName: 'GX-9000',
        },
        {
          id: 'YF03wZTKCfiysIyCSIWO',
          productName: 'Variable Area Flowcell',
        },
        {
          id: 'YZSYTzYOoNg7yF5whoKb',
          productName: 'OMNI 4000-7000 Series',
        },
        {
          id: 'kTZoDlxQo27y3T0DP82W',
          productName: 'Pitocell Flowmeter',
        },
        {
          id: 'lOXHBqbo6byEEEWwXJXw',
          productName: 'DBB Orifice Fitting',
        },
        {
          id: 'mV6MKS3AphGsNmoLsdrP',
          productName: 'ASCO™ 210 2-Way Solenoid Valves',
        }
      ]
    }
  ]

  const paramName = (name: string) => {
    return name.toLowerCase().replaceAll(" ", "-");
  }

  useEffect(() => {
    const getProducts = async () => {
      if (!initialLoading) {
        try {
          const querySnapshot = await getDocs(collection(db, "products"));
          const productsData: Products[] = [];

          // Fetch sub-products for each product
          for (const doc of querySnapshot.docs) {
            const productData = doc.data() as Products;
            const catalogueSnapshot = await getDocs(collection(db, "products", doc.id, "catalogue"));
            productData.subProducts = catalogueSnapshot.docs.map(subDoc => subDoc.data() as SubProducts);
            productsData.push(productData);
          }

          dispatch(setNavBar(productsData));
          dispatch(setLoaded());
          // Update state with fetched products
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
    };

    getProducts();
  }, [dispatch, initialLoading]);

  return (
      <div className={"flex gap-8 text-gray-500 text-xl"}>
        <Link className={"grid place-items-center"} href={"/"}>HOME</Link>
        <div className={"grid place-items-center"}>
          <div className={"cursor-pointer dropdown"}>
            <h1>PRODUCTS ↓</h1>
            <div className={"dropdown-content"}>
              { products2.map((product) => {
                return (
                    <div key={product.id} className={"sub-dropdown"}>
                      <a href={"/product/" + product.brandName}>{product.brandName}</a>
                      <div className={"sub-dropdown-content"}>
                        {product.subProducts.map((subProduct, index) => {
                          return (
                              <a key={subProduct.productName} href={"/product/" + product.brandName + '/' + paramName(subProduct.productName) + '?id=' + subProduct.id}>{subProduct.productName}</a>
                          )
                        })}
                      </div>
                    </div>
                )
              })}
            </div>
          </div>
        </div>
        <Link className={"grid place-items-center"} href={"/#systems&projects"}>SYSTEMS & PROJECTS</Link>
        <Link className={"grid place-items-center"} href={"/#services"}>SERVICES</Link>
        <Link className={"grid place-items-center"} href={"/#clients"}>CLIENTS</Link>
        <Link className={"grid place-items-center"} href={"/#contact"}>CONTACT</Link>
      </div>
  )
}
