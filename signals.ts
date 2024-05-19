import { Signal } from "@preact/signals";
import { Cookie } from "./types.ts";

// Signals para los filtros y las cookies

export const id_signal = new Signal<string>("");
export const name_signal = new Signal<string>("name");
export const brand_signal = new Signal<string>("brand");
export const iso_signal = new Signal<number| string>("iso");
export const formato_signal = new Signal<string>("format");
export const color_signal = new Signal<string>("color");
export const projects_signal = new Signal<Cookie[]>([]);




