import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MenuEditor = ({ data }) => {
  console.log(data);
  const [{ categories }] = data;

  console.log(categories);
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
        {data.map((cat, key) => (
          <Accordion type="single" collapsible className="w-full" key={key}>
            <AccordionItem value="item-1">
              <AccordionTrigger>Category Name</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default MenuEditor;
