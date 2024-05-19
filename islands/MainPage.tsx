import { FunctionComponent } from 'preact';
import { useEffect, useState } from "preact/hooks";
import { Film } from "../types.ts";
import Film_All from "../components/Film_All.tsx";
import { color_signal, formato_signal, iso_signal, brand_signal, name_signal } from "../signals.ts";
import { SelectFilter, NameFilter } from "./Filters.tsx";

// Página principal de la aplicación

// Props que recibe el componente
type Params = {
    films_original: Film[];
}

// Componente principal
const MainPage:FunctionComponent<Params> = ({films_original}) => {

    // Variables de estado
    const [films, setFilms] = useState<Film[]>(films_original);
    const [brands, setBrands] = useState<string[]>([]);
    const [iso, setIso] = useState<number[]>([]);
    
    
    useEffect(() => {
        const uniqueBrands = Array.from(new Set(films_original.map(film => film.brand))).sort();
        const uniqueIso = Array.from(new Set(films_original.map(film => film.iso))).sort((a, b) => a - b);
        
        setBrands(uniqueBrands);
        setIso(uniqueIso);
    }, [films_original]); // Dependencia films_original asegura que recalculamos si la lista original cambia


    // Funcion de filtrado de la marca
    const filter_marca = ( films:Film[] ) => {
        if(brand_signal.value == "brand"){return films}
        return films.filter(film => film.brand == brand_signal.value);
    }

    // Funcion de filtrado de la iso
    const filter_iso = ( films:Film[] ) => {
        if(iso_signal.value == "iso"){return films}
        else{
            return films.filter(film => film.iso == iso_signal.value);
        }
    }

    
    const color_options = ["Color","B&W"];  // Array de las 2 opciones de color
    // Opciones de color
    const filter_color = ( films:Film[] ) => {
        if(color_signal.value == "color"){return films}

        if(color_signal.value == "Color"){
            return films.filter(film => film.color == true);
        } else if(color_signal.value == "B&W"){
            return films.filter(film => film.color == false);
        } else {
            return films;
        }
    }

    const format_options = ["ThirtyFive","OneTwenty","ThirtyFive & OneTwenty"]; // Array de las 3 opciones de formato
    // Opciones de formato
    const filter_format = ( films:Film[] ) => {
        if(formato_signal.value == "format"){return films}
        if(formato_signal.value == "ThirtyFive"){
            return films.filter(film => film.formatThirtyFive == true);
        } else if(formato_signal.value == "OneTwenty"){
            return films.filter(film => film.formatOneTwenty == true);
        } else if(formato_signal.value == "ThirtyFive & OneTwenty"){
            return films.filter(film => film.formatThirtyFive == true && film.formatOneTwenty == true);
        } else {
            return films;
        }
    }
       
    // Funcion de filtrado del nombre
    const filter_nombre = ( films:Film[] ) => {
        if(name_signal.value == "name"){return films}
        return films.filter(film => film.name.includes(name_signal.value.toLowerCase()));
    }
    
    // Actualiza la lista de films al cambiar los filtros
    useEffect(() => {
        setFilms(filter_marca(filter_iso(filter_format(filter_color(filter_nombre(films_original))))));
    }, [color_signal.value,formato_signal.value,iso_signal.value,brand_signal.value,name_signal.value]);

    return (
        <>
            <h1 class="Title">Jesús Films</h1>
            <div class="Filters">
                <a href="/projects" class="ProjectsButton">Projects</a>
                <SelectFilter options={brands} selected={brand_signal} FilterType={"brand"}/>
                <SelectFilter options={iso} selected={iso_signal} FilterType={"iso"}/>
                <SelectFilter options={format_options} selected={formato_signal} FilterType={"format"}/>
                <SelectFilter options={color_options} selected={color_signal} FilterType={"color"}/>
                <NameFilter name={name_signal}/>
            </div>
            <Film_All films={films} />
        </>
     )
}

export default MainPage;