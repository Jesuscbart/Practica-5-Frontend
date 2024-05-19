import { FunctionComponent } from 'preact';
import { Signal } from "@preact/signals";

// Filtros de búsqueda

// Filtro de selección
type SelectFilterParams = {
    FilterType: string;
    options: string[] | number[];
    selected: Signal;
}

// Componente de filtro de selección
export const SelectFilter:FunctionComponent<SelectFilterParams> = ({FilterType,options,selected}) => {

    return (
        <select class="select_filter" onChange={(e)=>{selected.value = e.currentTarget.value}}>
            <option value={FilterType} selected>{FilterType}</option>
            {options.map(option => {
                return <option value={option}>{option}</option>
            }
            )}
        </select>
    )
}

// Filtro de nombre
type NameFilterProps = {
    name: Signal;
}

// Componente de filtro de nombre
export const NameFilter:FunctionComponent<NameFilterProps> = ({name}) => {
    return (
    <input class="name_input" type="search" value={name.value} 
        onInput={(e)=>{name.value = e.currentTarget.value}} // Actualiza el valor del nombre
        onFocus={(e)=>{e.currentTarget.value = ''}}/>  
    )
}