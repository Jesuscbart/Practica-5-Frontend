import { useState, useEffect } from "preact/hooks";
import axios from "npm:axios";
import { Film, FilmResponse } from "../types.ts";

async function Films() {
    try {
      const characters = await axios.get<FilmResponse>("https://filmapi.vercel.app/api/films");
      return (
        <div>
          <h1>Personajes de Rick y Morty</h1>
          <ul>
            {characters.data.results.map(ch => {
              return <li key={ch.id}>{ch.name}</li>;
            })}
          </ul>
        </div>
      );
    } catch (err) {
      return <div>Ha habido un error</div>;
    }
}

export default Films;