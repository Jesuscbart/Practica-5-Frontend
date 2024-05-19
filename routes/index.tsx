import { Film } from "../types.ts";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Film_All from "../components/Film_All.tsx";
import MainPage from "../islands/MainPage.tsx";

// Handler de index

export const handler: Handlers = {

  async GET(_req: Request, ctx: FreshContext) {
    
    const films = await fetch("https://filmapi.vercel.app/api/films");  // Hacemos una petición a la API de films
    if (!films.ok) {
      throw new Error('Network response was not ok'); // Si la respuesta no es correcta, lanzamos un error
    }
    const data:Film [] = await films.json();  // Asignamos la respuesta al array data

    return ctx.render(data);
  },
};

// Página de index en la que mostramso MainPage

const Page = (props: PageProps) => {
  const films: Film[] = props.data;

  return (

      <>
          <MainPage films_original={films}/>
      </>

  );
};

export default Page;