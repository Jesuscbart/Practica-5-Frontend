// Tipos de datos de Film y de Cookie

export type KeyFeature = {
    _id: string;
    feature: string;
  };

export type Film = {
    _id: string;
    brand: string;
    name: string;
    iso: number;
    formatThirtyFive: boolean;
    formatOneTwenty: boolean;
    color: boolean;
    process: string;
    staticImageUrl: string;
    description: string;
    customDescription: string[];
    keyFeatures: KeyFeature[];
    dateAdded: string;
    __v: number;
  };

export type Cookie = {
  project: string;
  film_IDs: string[];
};