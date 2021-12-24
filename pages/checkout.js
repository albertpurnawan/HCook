import { Layout } from "../Layout/After";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { green, grey } from "@mui/material/colors";
import Image from "next/image";
import React from "react";
import test from "../public/Images/butter.jpg";
import test2 from "../public/Images/pancetta.jpg";
import test3 from "../public/Images/parmesan.jpg";
export default function checkout() {
  return (
    <Layout>
      <div className="mx-10">
        <p className="text-2xl font-bold">Cart</p>
        <div className="flex flex-row">
          <div className="flex flex-col w-8/12">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <div className="w-auto">
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: grey[800],
                          "&.Mui-checked": {
                            color: green[600],
                          },
                        }}
                      />
                    }
                    label="Select All"
                  />
                </div>
              </div>
              <a className="far fa-trash-alt mt-3" />
            </div>
            <div className="border border-gray-200 rounded-xl m-4 p-4">
              <div className="w-auto border-b-2 border-gray-200 ">
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: grey[800],
                        "&.Mui-checked": {
                          color: green[600],
                        },
                      }}
                    />
                  }
                  label="Spaghetti Carbonara"
                />
              </div>
              <div className="flex flex-row pt-4">
                <Checkbox
                  defaultChecked
                  sx={{
                    color: grey[800],
                    "&.Mui-checked": {
                      color: green[600],
                    },
                  }}
                />
                <div className="flex flex-col">
                  <Image
                    objectFit="fill"
                    src={test}
                    alt="image product"
                    height="80"
                    width="80"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col pl-4">
                  <p>Unsalted Butter</p>
                  <p className="pt-2 font-bold">Rp 15.000</p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-green-400 pt-3">Add Note</p>
                <div className="flex flex-row">
                  <a className="far fa-trash-alt mt-2 pr-3 text-xl" />
                  <div className="p-1">
                    <button className="bg-red-400 rounded-full w-auto px-2.5 pb-1">
                      -
                    </button>
                  </div>
                  <div className="p-1 ">
                    <input
                      type="number"
                      placeholder="1"
                      min="1"
                      max="99"
                      maxLength="2"
                      className="w-4.5 h-6 text-center border-none bg-transparent outline-none appearance-none"
                    />
                  </div>
                  <div className="p-1">
                    <button className="bg-green-400 rounded-full w-auto px-2 pb-1">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row pt-4">
                <Checkbox
                  defaultChecked
                  sx={{
                    color: grey[800],
                    "&.Mui-checked": {
                      color: green[600],
                    },
                  }}
                />
                <div className="flex flex-col">
                  <Image
                    objectFit="fill"
                    src={test2}
                    alt="image product"
                    height="80"
                    width="80"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col pl-4">
                  <p>Pancetta</p>
                  <p className="pt-2 font-bold">Rp 30.000</p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-green-400 pt-3">Add Note</p>
                <div className="flex flex-row">
                  <a className="far fa-trash-alt mt-2 pr-3 text-xl" />
                  <div className="p-1">
                    <button className="bg-red-400 rounded-full w-auto px-2.5 pb-1">
                      -
                    </button>
                  </div>
                  <div className="p-1 ">
                    <input
                      type="number"
                      placeholder="1"
                      min="1"
                      max="99"
                      maxLength="2"
                      className="w-4.5 h-6 text-center border-none bg-transparent outline-none appearance-none"
                    />
                  </div>
                  <div className="p-1">
                    <button className="bg-green-400 rounded-full w-auto px-2 pb-1">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row pt-4">
                <Checkbox
                  defaultChecked
                  sx={{
                    color: grey[800],
                    "&.Mui-checked": {
                      color: green[600],
                    },
                  }}
                />
                <div className="flex flex-col">
                  <Image
                    objectFit="fill"
                    src={test3}
                    alt="image product"
                    height="80"
                    width="80"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col pl-4">
                  <p>Parmesan Cheese</p>
                  <p className="pt-2 font-bold">Rp 30.000</p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-green-400 pt-3">Add Note</p>
                <div className="flex flex-row">
                  <a className="far fa-trash-alt mt-2 pr-3 text-xl" />
                  <div className="p-1">
                    <button className="bg-red-400 rounded-full w-auto px-2.5 pb-1">
                      -
                    </button>
                  </div>
                  <div className="p-1 ">
                    <input
                      type="number"
                      placeholder="2"
                      min="1"
                      max="99"
                      maxLength="2"
                      className="w-4.5 h-6 text-center border-none bg-transparent outline-none appearance-none"
                    />
                  </div>
                  <div className="p-1">
                    <button className="bg-green-400 rounded-full w-auto px-2 pb-1">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-10 pt-15 w-1/3">
            <div className="border-2 border-gray-200 p-4 rounded-tl-lg rounded-tr-lg">
              <div className="flex flex-row justify-between border border-gray-400 p-4 rounded-xl">
                <p className="font-bold">Add Discount</p>
                <p className="fas fa-tags mt-1" />
              </div>
            </div>
            <div className="flex flex-row justify-between border-l-2 border-r-2 border-gray-200 p-4">
              <div className="flex flex-col ">
                <p className="font-bold pb-5">List Item</p>
                <p className="font-bold">Total Price</p>
                <p className="font-bold">Total Discount</p>
              </div>
              <div className="flex flex-col">
                <p className="pt-10">Rp 75.000</p>
                <p className="">Rp 5.000</p>
              </div>
            </div>
            <div className="px-4">
              <hr />
            </div>
            <div className="flex flex-row justify-between border-l-2 border-r-2 border-gray-200 p-4">
              <p className="font-bold">Total Price</p>
              <p className="">Rp 70.000</p>
            </div>
            <div className="p-4 border-l-2 border-r-2 border-b-2 border-gray-200">
              <button className="bg-green-400 rounded-lg h-12 w-full text-white font-bold text-xl">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
