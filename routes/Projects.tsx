import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Film, Cookie } from "../types.ts";
import { getProjectsFromCookie } from "../Cookies.ts";
import Film_All from "../components/Film_All.tsx";


type ProjectsProps = {
  films: Film[];
  projects: Cookie[];
};

export const handler: Handlers = {

    GET: async (req: Request, ctx:FreshContext) => {
        const projects = getProjectsFromCookie(req);
        
        const response = await fetch("https://filmapi.vercel.app/api/films");
        const films: Film[] = await response.json();

        if (!projects.length || !films.length) {
            return ctx.render(null);
        }

        return ctx.render({ projects, films });
    }
};

const ProjectsPage = (props: PageProps<ProjectsProps>) => {
    const { data } = props;
  
    if (!data) {
      return <h1>No Projects or Films found!</h1>;
    }
  
    return (
      <div>
        <h1>Projects</h1>
        {data.projects.map(project => (
          <div key={project.project}>
            <h2>{project.project}</h2>
           
            <ul>
              {project.film_IDs.map(filmID => (
                <li key={filmID}>{filmID}</li>
              ))}
            </ul>
        </div>
        ))}
      </div>
    );
  };
  
  export default ProjectsPage;


