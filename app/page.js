import GroupsIcon from "@mui/icons-material/Groups";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 p-4">
      <div className="text-2xl font-bold mb-4">Mis menús</div>
      <section className="grid grid-cols-3 gap-4 max-md:flex max-md:flex-col">
        <article className="flex flex-col p-5 border rounded-xl gap-2 justify-between bg-white">
          <div>
            <FastfoodIcon className="text-3xl" />
          </div>
          <div className="text-xs gap-2">
            <div className="text-2xl font-bold mb-2">Nombre del negocio</div>
            <div className="flex gap-2">
              <span className="px-4 py-2 bg-slate-200 rounded">Publicado</span>
              <span className="px-4 py-2 bg-slate-200 rounded">
                Menú solo lectura
              </span>
            </div>
          </div>
          <Link
            href="/editor"
            className="w-full text-center mt-4 px-4 py-2 bg-slate-200 rounded-md"
          >
            Editar Menú
          </Link>
        </article>
        <article className="flex flex-col justify-between p-5 border rounded-xl gap-6 bg-white">
          <div>
            <InsertCommentIcon className="text-3xl" />
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">Ayúdanos a mejorar</div>
            <p className="text-sm">
              Compártenos tu feedback para mejorar nuestra App.
            </p>
          </div>
          <div className="w-full text-center">
            <button className="py-2 px-6 bg-slate-200 rounded-md">
              Contestar encuesta
            </button>
          </div>
        </article>
        <article className="flex flex-col justify-between p-5 border rounded-xl gap-6 bg-white">
          <div>
            <GroupsIcon className="text-3xl" />
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">
              Únete a nuestra comunidad
            </div>
            <p className="text-sm">
              Estamos creando la mejor comunidad de restaurantes y cafeterías.
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <button>Whatsapp</button>
            <button>Facebook</button>
          </div>
        </article>
      </section>
    </main>
  );
}
