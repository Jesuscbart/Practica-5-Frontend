import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Film, Cookie } from "../types.ts";
import { getProjectsFromCookie } from "../Cookies.ts";
import Film_All from "../components/Film_All.tsx";

// Props para la página de proyectos
type ProjectsProps = {
  films: Film[];
  projects: Cookie[];
};

// Handler de la página de proyectos
export const handler: Handlers = {

    GET: async (req: Request, ctx:FreshContext) => {  
        const projects = getProjectsFromCookie(req);  // Obtenemos las cookies de los proyectos
        
        const response = await fetch("https://filmapi.vercel.app/api/films");   // Hacemos una petición a la API de films
        const films: Film[] = await response.json();    // Obtenemos los datos de la respuesta

        if (!projects.length || !films.length) {  // Si no hay proyectos o films, renderizamos null
            return ctx.render(null);
        }

        return ctx.render({ projects, films }); // Renderizamos los proyectos y los films
    }
};

// Página de proyectos
const ProjectsPage = (props: PageProps<ProjectsProps>) => {
    const { data } = props;
  
    if (!data) {
      return <h1>No Projects or Films found!</h1>;  // Si no hay proyectos o films, mostramos un mensaje
    }
  
    return (
      <div>
        <a href="/" class="HomeButton">Home</a>
        <h1 class="ProjectsMainTitle">Projects</h1>
        {data.projects.map(project => (
          <div key={project.project}>
            <h2 class="ProjectsName">{project.project}</h2>
            <Film_All films={data.films.filter(film => project.film_IDs.includes(film._id))} />
        </div>
        ))}
      </div>
    );
  };
  
  export default ProjectsPage;


