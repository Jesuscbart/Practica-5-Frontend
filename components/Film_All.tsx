import { FunctionComponent } from "preact";
import { Film } from "../types.ts";

// Props que recibe el componente
type Film_Item_Props = {
  films: Film[];
};

// Componente que muestra todas las películas junto con algunos datos en la página principal
const Film_All: FunctionComponent<Film_Item_Props> = (props) => {

  const films: Film[] = props.films;   // films de tipo Film[] que recibe como props
    
    return (    // Mapea cada película y muestra parte de sus datos
        <div class = "Film_All">
            {films.map((my_film) => (
            <div class="Film_container">
                <a href={`/film/${my_film._id}`} key={my_film._id}>
                    <div class="FilmData">
                        <h1 class="FilmBrand">{my_film.brand}</h1>
                        <h2 class="FilmName">{my_film.name}</h2>
                        <img src={my_film.staticImageUrl} alt={my_film.name} />
                        <p>
                            Format:
                            {my_film.formatThirtyFive && " Thirty Five"}
                            {my_film.formatThirtyFive && my_film.formatOneTwenty && ", "}
                            {my_film.formatOneTwenty && " One Twenty"}
                        </p>
                        <p>Iso: {my_film.iso}</p>
                        <p>Color: {my_film.color ? "Color" : "B&W"}</p>
                    </div>
                </a>
            </div>
            ))}
        </div>
    )
};

export default Film_All;