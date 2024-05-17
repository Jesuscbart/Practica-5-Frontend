import { FunctionComponent } from 'preact';
import { Signal } from "@preact/signals";
import Film_All from "../components/Film_All.tsx";
import { Film } from "../types.ts";

import { useEffect, useState } from "preact/hooks";


type SelectFilterParams = {
    FilterType: string;
    options: string[] | number[];
    selected: Signal;
}

const SelectFilter:FunctionComponent<SelectFilterParams> = ({FilterType,options,selected}) => {

    return (
        <select class="select_filter" onChange={(e)=>{selected.value = e.currentTarget.value}}>
            <option value={FilterType} selected>{FilterType}</option>
            {options.map(option_X => {
                return <option value={option_X}>{option_X}</option>
            }
            )}
        </select>
    )
}


type NombreFilterProps = {
    name: Signal;
}

const NombreFilter:FunctionComponent<NombreFilterProps> = ({name}) => {
    return (
    <input class="name_input" type="search" value={name.value} 
        onInput={(e)=>{name.value = e.currentTarget.value}} 
        onFocus={(e)=>{e.currentTarget.value = ''}}/>
    )
}

export const color_signal = new Signal<string>("color options");
export const formato_signal = new Signal<string>("format");
export const iso_signal = new Signal<number| string>("iso");
export const marca_signal = new Signal<string>("brand");
export const nombre_signal = new Signal<string>("name");
export const id_signal = new Signal<string>("");



// Opciones ///////////////////////////////////////////
export const color_options = ["Color","B&W"];

export const format_options = ["ThirtyFive","OneTwenty","ThirtyFive & OneTwenty"];

export const iso_options = [1.6,6,25,50,64,80,100,125,160,200,250,320,400,800,3200];

export const marca_options = ["agfaphoto","arista","bergger","catlabs","cinestill film",
"dubblefilm","film photography project","foma","fujifilm","ilford","japan camera hunter",
"kentmere","kodak","kono","kosmo foto","lomography","psychedelic blues","revolog","rollei",
"shanghai film","street candy film","yodica"];


//////////////////////////////////////////////////////
type MainPageParams = {
    films_original: Film[];
}

const MainPage:FunctionComponent<MainPageParams> = ({films_original}) => {

    const [films, setFilms] = useState<Film[]>(films_original);

    const filter_color = ( films:Film[] ) => {
        if(color_signal.value == "color options"){return films}

        if(color_signal.value == "Color"){
            return films.filter(film => film.color == true);
        } else if(color_signal.value == "B&W"){
            return films.filter(film => film.color == false);
        } else {
            return films;
        }
    }
    
    const filter_format = ( films:Film[] ) => {
        if(formato_signal.value == "format"){return films}

        if(formato_signal.value == "ThirtyFive"){
            return films.filter(film => film.formatThirtyFive == true);
        } else if(formato_signal.value == "OneTwenty"){
            return films.filter(film => film.formatOneTwenty == true);
        } else if(formato_signal.value == "ThirtyFive & OneTwenty"){
            return films.filter(film => film.formatThirtyFive == true && film.formatOneTwenty == true);
        } else 
        {
            return films;
        }
    }

    const filter_iso = ( films:Film[] ) => {
        if(iso_signal.value == "iso"){return films}
        else{
            return films.filter(film => film.iso == iso_signal.value);
        }
    }

    const filter_marca = ( films:Film[] ) => {
        if(marca_signal.value == "brand"){return films}
        return films.filter(film => film.brand == marca_signal.value);
    }

    const filter_nombre = ( films:Film[] ) => {
        if(nombre_signal.value == "name"){return films}
        return films.filter(film => film.name.includes(nombre_signal.value.toLowerCase()));
    }

    useEffect(() => {
        setFilms(filter_marca(filter_iso(filter_format(filter_color(filter_nombre(films_original))))));
        console.log("Filters: ",color_signal.value,formato_signal.value,iso_signal.value,marca_signal.value,nombre_signal.value)
    }, [color_signal.value,formato_signal.value,iso_signal.value,marca_signal.value,nombre_signal.value]);
    

    return (
    <>
        <div class="TitleContainer">
            <h1 class="Title">Jesús Films</h1>

        </div>
        <div class="FilterContainer">
            <SelectFilter options={marca_options} selected={marca_signal} FilterType={"brand"}/>
            <SelectFilter options={iso_options} selected={iso_signal} FilterType={"iso"}/>
            <SelectFilter options={format_options} selected={formato_signal} FilterType={"format"}/>
            <SelectFilter options={color_options} selected={color_signal} FilterType={"color options"}/>
            <NombreFilter name={nombre_signal}/>
        </div>

        <Film_All films={films} />
    </>
        )

}

export default MainPage;