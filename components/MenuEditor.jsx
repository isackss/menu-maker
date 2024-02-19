import { Button } from "./ui/button";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const MenuEditor = ({ data, addProducts }) => {
  const categories = data[0].categories.length;
  const products = data[0].items.length;
  return (
    <section>
      <div className="flex justify-between border-b py-6 max-sm:flex-col">
        <div className="flex-1">
          <div>Menú</div>
          <div className="text-xs mb-4">
            ({categories}) {categories > 1 ? "categorias" : "categoria"} (
            {products}) {products > 1 ? "productos" : "producto"}
          </div>
        </div>
        <div className="flex gap-2 max-sm:flex-wrap flex-1">
          <Button className="text-xs">Importar</Button>
          <Button className="text-xs">
            <AddCircleIcon className="mr-2" />
            Categoría
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-xs">
                <AddCircleIcon className="mr-2" />
                Producto
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Agregar productos</DialogTitle>
                {/* <DialogDescription>
                      Make changes to your profile here. Click save when youre
                      done.
                    </DialogDescription> */}
              </DialogHeader>
              <form className="" onSubmit={(e) => addProducts(e)}>
                <div className="grid gap-4 py-2">
                  <Label htmlFor="name" className="">
                    Nombre del producto
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Sopa de mariscos"
                    className="col-span-3"
                  />
                </div>
                <div className="grid gap-4 py-2">
                  <Label htmlFor="description" className="">
                    Descripción
                  </Label>
                  <Input
                    id="description"
                    name="description"
                    placeholder="Deliciosa sopa de mariscos acompañado con ..."
                    className="col-span-3"
                  />
                </div>
                <div className="grid gap-4 py-2">
                  <Label htmlFor="price" className="">
                    Precio
                  </Label>
                  <Input id="price" name="price" className="col-span-3" />
                </div>
                <div className="grid gap-4 py-2">
                  <Label htmlFor="category" className="">
                    Categoría
                  </Label>
                  <Input id="category" name="category" className="col-span-3" />
                </div>
                <DialogFooter>
                  <DialogClose
                    type="submit"
                    className="bg-slate-900 text-white py-2 px-4 rounded-md text-sm"
                  >
                    Agregar
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        {data.map((menu, key) => (
          <Accordion type="single" collapsible className="w-full" key={key}>
            {menu?.categories.map((cat, key) => (
              <AccordionItem value={`item-${key}`} key={cat.catName}>
                <AccordionTrigger>{cat.catName}</AccordionTrigger>
                {menu?.items.map((item, key) =>
                  item.category == cat.catName ? (
                    <AccordionContent
                      key={key}
                      className="flex justify-between p-4 items-center mb-2 border-b"
                    >
                      <div className="flex items-center">
                        <div className="w-[60px] h-[60px] border mr-2">
                          FOTO
                        </div>
                        <div>
                          <div className="text-base font-bold">{item.name}</div>
                          <div>$ {item.price}</div>
                          <div>{item.description}</div>
                        </div>
                      </div>
                      <div>Botones</div>
                    </AccordionContent>
                  ) : (
                    ""
                  )
                )}
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default MenuEditor;
