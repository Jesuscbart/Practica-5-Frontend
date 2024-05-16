import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";
import { Film, KeyFeature } from "../types.ts";
import { useState } from "preact/hooks";

const Film_Item: FunctionComponent<{ film: Film }> = (props) => {

  const { film } = props;

  return (
    <div className="card">
      <img src={film.staticImageUrl} alt={film.name} />
      <div className="card-body">
        <h3 className="card-title">{film.brand}</h3>
        <h4 className="card-title">{film.name}</h4>
      </div>
    </div>
  );
};

export default Film_Item;

