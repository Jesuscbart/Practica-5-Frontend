import { FunctionComponent } from "preact";
import { signal } from "@preact/signals";
import { Film } from "../types.ts";
import Film_All from "../components/Film_All.tsx";
import { useEffect, useState } from "preact/hooks";

export const name = signal<string>("");
export const formato_120 = signal<string>("");
export const formato_35 = signal<string>("");
export const brand=signal<string>("")
export const iso = signal<string>("");
export const color=signal<string>("")

type Filtros = {
    films: Film[],
    marcas: string[],
    ISOS: number[]
}

const OpcionesFiltros: FunctionComponent<Filtros> = ({ films, marcas, ISOS }) => {
    const [filterPeliculas, setFilterPeliculas] = useState<Film[]>([])
    const manejarfiltros = () => {
        const filter = films.filter((film) => {
            if (color.value !== "" && ((!film.color && color.value === "true") || (film.color && color.value === "false"))) {
                return false
            }
            if (formato_120.value !== "" && ((!film.formatOneTwenty && formato_120.value === "true") || (film.formatOneTwenty && formato_120.value === "false"))) {
                return false
            }
            if (formato_35.value !== "" && ((!film.formatThirtyFive && formato_35.value === "true") || (film.formatThirtyFive && formato_35.value === "false"))) {
                return false
            }
            if (name.value !== "" && !film.name.toLowerCase().includes(name.value.toLowerCase())) {
                return false
            }
            if (brand.value !== "" && film.brand !== brand.value) {
                return false
            }
            if (iso.value !== "" && film.iso !== parseInt(iso.value)) {
                return false
            }

            return true
        })
        setFilterPeliculas(filter)
    }


    useEffect(() => {
        manejarfiltros()
        //console.log(filterPeliculas)
    }, [films, color.value, formato_120.value, formato_35.value, name.value, brand.value, iso.value])


    return (
        <div>
            <div class="filter">
                <div>
                    <label>Marca</label>
                    <select class="selected" name="brand" value={brand.value} onInput={(e) => brand.value = e.currentTarget.value}>
                        <option value="">Todas</option>
                        {marcas.map((marca, index) => (
                            <option key={index} value={marca}>
                                {marca}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>ISO</label>
                    <select class="selected"name="iso" value={iso.value} onInput={(e) => iso.value = e.currentTarget.value}>
                        <option value="">Todas</option>
                        {ISOS.map((iso, index) => (
                            <option key={index} value={iso}>
                                {iso}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Format 35</label>
                    <select
                        name="formatThirtyFive" value={formato_35.value} onInput={(e) => formato_35.value = e.currentTarget.value} class="selected"
                    >
                        <option value="true">Si</option>
                        <option value="false">No</option>
                        <option value="">Todas</option>
                    </select>
                </div>
                <div>
                    <label>Format 120</label>
                    <select
                        name="formatOneTwenty" value={formato_120.value} onInput={(e) => formato_120.value = e.currentTarget.value} class="selected"
                    >
                        <option value="true">Si</option>
                        <option value="false">No</option>
                        <option value="">Todas</option>
                    </select>
                </div>

                <div>
                    <label>Color</label>
                    <select value={color.value} name="color" onInput={(e) => color.value = e.currentTarget.value} class="selected">
                        <option value="">Todas</option>
                        <option value="true">Color</option>
                        <option value="false">Blanco y Negro</option>

                    </select>
                </div>
                <div>
                    <label>Name</label>
                    <input onInput={(e) => name.value = e.currentTarget.value }class="selected"></input>


                </div>
            </div>
            <div>
                <Film_All films={filterPeliculas}/>
            </div>

        </div>
    )


}
export default OpcionesFiltros