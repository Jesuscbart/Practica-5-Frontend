import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Film } from "../../types.ts";
import FilmPage from "../../components/Film.tsx";

export const handler: Handlers = {
        async GET(_req: Request, ctx: FreshContext) {

            const { id } = ctx.params;

            const myFilm = await fetch(`https://filmapi.vercel.app/api/films`);

            if (!myFilm.ok) {
            throw new Error('Network response was not ok');
            }

            const data: Film[] = await myFilm.json();
        
            const film = data.find(film => film._id === id);

            return ctx.render({film, id});
        },
        };

    const Page = (props: PageProps) => {
        
        const { film, id } = props.data;

        if (!film) {
            return <div>Not found</div>;
        }

        return (
            <>
                <FilmPage film={film} />
            </>
        );
    }

export default Page;
