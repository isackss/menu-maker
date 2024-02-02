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

const Editor = () => {
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
                <CardDescription>Restaurante</CardDescription>
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
                    <DialogDescription>
                      Make changes to your profile here. Click save when youre
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Nombre del negocio
                      </Label>
                      <Input
                        id="name"
                        placeHolder="Restaurante Sabores"
                        className="col-span-3"
                      />
                    </div>
                    {/* <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        value="@peduarte"
                        className="col-span-3"
                      />
                    </div> */}
                  </div>
                  <DialogFooter>
                    <Button type="submit">Guardar cambios</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
            <div className="px-6">
              <Button className="w-full">Ver menú</Button>
            </div>
          </Card>
        </div>
        <Card className="flex-1 border p-4">Sin información para mostrar.</Card>
      </div>
    </section>
  );
};

export default Editor;
