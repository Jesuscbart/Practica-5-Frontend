import { FunctionComponent } from 'preact';
import { Signal } from "@preact/signals";


type SelectFilterParams = {
    FilterType: string;
    options: string[] | number[];
    selected: Signal;
}
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


type NombreFilterProps = {
    name: Signal;
}
export const NombreFilter:FunctionComponent<NombreFilterProps> = ({name}) => {
    return (
    <input class="name_input" type="search" value={name.value} 
        onInput={(e)=>{name.value = e.currentTarget.value}} 
        onFocus={(e)=>{e.currentTarget.value = ''}}/>
    )
}