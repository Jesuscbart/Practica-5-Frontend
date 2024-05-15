import { KeyFeature, Film } from "../types.ts";

export default async function AllFilms() {
  try {
    const response = await fetch("https://filmapi.vercel.app/api/films");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const films: Film[] = await response.json(); // directamente asignamos el arreglo a films
    return (
      <div>
        <h1>Películas</h1>
        <ul>
          {films.map((film) => ( // usa directamente films aquí
            <li key={film._id}>{film.name} - {film.name}</li>
          ))}
        </ul>
      </div>
    );
  } catch (err) {
    return <div>Ha habido un error: {err.message}</div>;
  }
}

















/*
// Página principal
const Page = () => (
  <>
    <AllFilms />
  </>
);

export default Page;
*/