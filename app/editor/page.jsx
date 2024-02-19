"use client";

import { useState } from "react";
import Link from "next/link";
import qr from "../../assets/img/qr.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MenuEditor from "@/components/MenuEditor";

const Editor = () => {
  const [companyData, setCompanyData] = useState({
    companyName: "Demo",
    companyId: "",
    menus: [
      {
        menuId: 1,
        companyId: "",
        menuName: "",
        categories: [
          {
            catId: 1,
            catName: "Bebidas",
          },
          {
            catId: 2,
            catName: "Almuerzos",
          },
          {
            catId: 3,
            catName: "Entradas",
          },
        ],
        items: [
          {
            name: "Cocacola Lata",
            description: "Cocacola de 12oz lata.",
            price: "1.50",
            imgUrl: "",
            category: "Bebidas",
          },
          {
            name: "Pepsi Lata",
            description: "Pepsi de 12oz lata.",
            price: "1.50",
            imgUrl: "",
            category: "Bebidas",
          },
          {
            name: "Pasta al pesto con pollo",
            description: "Deliciosa pasta al pesto con pollo.",
            price: "6.75",
            imgUrl: "",
            category: "Almuerzos",
          },
        ],
      },
    ],
  });

  const handleSubmit = (e) => {
    const name = e.currentTarget.elements.name.value;
    setCompanyData((prev) => ({ ...prev, companyName: name }));
    e.preventDefault();
  };

  const addProducts = (e) => {
    e.preventDefault();
    const { name, description, price, imgUrl, category } =
      e.currentTarget.elements;
    console.log(name.value, description.value, price.value, category.value);

    /*  setCompanyData((prev) => {
      const itemsArray = prev.menus[0].items;
      const updateItemsArray = itemsArray.push({
        name: name.value,
        description: description.value,
        price: price.value,
        imgUrl: "",
        category: category.value,
      });

      return {
        ...prev,
        menus: [...prev.menus, (prev.menus[0].items = updateItemsArray)],
      };
    }); */
    setCompanyData((prev) => ({
      ...prev,
      menus: [
        {
          ...prev.menus[0],
          items: [
            ...prev.menus[0].items,

            {
              name: name.value,
              description: description.value,
              price: price.value,
              imgUrl: "",
              category: category.value,
            },
            ,
          ],
        },
      ],
    }));
  };

  console.log(companyData);
  return (
    <section className="w-full p-4">
      <div className="text-2xl font-bold mb-4">Editor</div>
      <div className="flex flex-row max-md:flex-col gap-4">
        <div className="flex flex-col gap-4 max-w-lg">
          <Card className="flex">
            <div className="place-self-center p-4">
              <Image src={qr} alt="QR code" />
            </div>
            <div>
              <CardHeader>
                <CardTitle className="">Nombre del negocio</CardTitle>
                <CardDescription>{companyData.companyName}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  <Button>Descargar QR</Button>
                </p>
              </CardContent>
              <CardFooter>
                <p>Imprime tu código QR y pégalo en tus mesas.</p>
              </CardFooter>
            </div>
          </Card>
          <Card className="py-6">
            <CardContent className="flex flex-row flex-wrap gap-2">
              <Button className="flex-1">Vista previa</Button>
              <Button className="flex-1">Imprimir</Button>
              <Button className="flex-1">Compartir</Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Ajustes</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Configuración del menú</DialogTitle>
                    {/* <DialogDescription>
                      Make changes to your profile here. Click save when youre
                      done.
                    </DialogDescription> */}
                  </DialogHeader>
                  <form className="" onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                      <Label htmlFor="name" className="">
                        Nombre del negocio
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Restaurante Sabores"
                        className="col-span-3"
                      />
                    </div>
                    <DialogFooter>
                      <DialogClose
                        type="submit"
                        className="bg-slate-900 text-white py-2 px-4 rounded-md text-sm"
                      >
                        Guardar cambios
                      </DialogClose>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
            <div className="px-6">
              <Button className="w-full">Ver menú</Button>
            </div>
          </Card>
        </div>
        <Card className="flex-1 border px-4">
          {companyData?.menus.length > 0 ? (
            <MenuEditor
              data={companyData.menus}
              addProducts={(e) => addProducts(e)}
            />
          ) : (
            "Sin información"
          )}
        </Card>
      </div>
    </section>
  );
};

export default Editor;
