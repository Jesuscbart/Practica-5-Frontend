import { FunctionComponent } from 'preact';
import { Film } from '../types.ts';

type FilmProps = {
    film: Film;
}

const FilmPage: FunctionComponent<FilmProps> = (props) => {
    const film: Film = props.film;

    return (
        <div class="FilmPage">
            <h1>{film.brand}</h1>
            <h2>{film.name}</h2>
            <img class="SingleFilmImage" src={film.staticImageUrl} alt={film.name} />
            <p><strong>Description: </strong>{film.description}</p>
            <div class="FilmFeatures">
                <div class="FilmDetails">
                    <p><strong>ISO: </strong>{film.iso}</p>
                    <p><strong>Format: </strong>{film.formatThirtyFive?"Thirty Five":""}{film.formatThirtyFive && film.formatOneTwenty?", ":""}{film.formatOneTwenty?"One Twenty":""}</p>
                    <p><strong>Color: </strong>{film.color ? "Color" : "B&W"}</p>
                    <p><strong>Process: </strong>{film.process}</p>
                </div>
                <div class="FilmKeyFeatures">
                    <p><strong>Key Features:</strong></p>
                    <ul class="Features">
                        {film.keyFeatures.map(feature => <li key={feature._id}>{feature.feature}</li>)}
                    </ul>
                </div>
            </div>
            <a href="/" class="BackButton">Back</a>
        </div>
    )
};

export default FilmPage;