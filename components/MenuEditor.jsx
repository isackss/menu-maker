import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MenuEditor = ({ data }) => {
  return (
    <section>
      <div className="flex justify-between border-b py-6">
        <div>
          <div>Menú</div>
          <div className="text-xs">(1) categoría (0) productos</div>
        </div>
        <div className="flex gap-2">
          <Button>Importar</Button>
          <Button>Agregar categoría</Button>
          <Button>Agregar producto</Button>
        </div>
      </div>
      <div>
        {data.map((menu, key) => (
          <Accordion type="single" collapsible className="w-full" key={key}>
            {menu.categories.map((item) => (
              <AccordionItem value="item-1" key={item.catName}>
                <AccordionTrigger>{item.catName}</AccordionTrigger>
                {menu?.items.map((item, key) => (
                  <AccordionContent
                    key={key}
                    className="flex justify-between border p-4 items-center"
                  >
                    <div className="flex items-center">
                      <div className="w-[60px] h-[60px] border mr-2">FOTO</div>
                      <div>
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                        <div>{item.description}</div>
                      </div>
                    </div>
                    <div>Botones</div>
                  </AccordionContent>
                ))}
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default MenuEditor;
