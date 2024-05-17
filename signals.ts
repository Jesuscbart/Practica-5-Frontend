import { Signal } from "@preact/signals";

export const color_signal = new Signal<string>("color");
export const formato_signal = new Signal<string>("format");
export const iso_signal = new Signal<number| string>("iso");
export const brand_signal = new Signal<string>("brand");
export const name_signal = new Signal<string>("name");
export const id_signal = new Signal<string>("");