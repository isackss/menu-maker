import Link from "next/link";

const Covers = () => {
  return (
    <section className="w-full">
      <div className="text-2xl font-bold p-4 mb-4">Portadas</div>
      <div className="flex flex-col w-full items-center p-4">
        <p className="text-lg font-bold">Crea portadas</p>
        <p className="text-gray-500">
          Crea una portada para gestionar los enlaces y redes sociales de tu
          negocio.
        </p>
        <button className="bg-slate-800 rounded-md px-6 py-3 text-white mt-6">
          Agrega portada
        </button>
        <Link href="" className="underline underline-offset-1 mt-1">
          Ver tutoriales en{" "}
          <span className="font-bold text-red-600">Youtube</span>
        </Link>
      </div>
    </section>
  );
};

export default Covers;
