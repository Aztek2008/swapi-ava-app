import {
  IFilm,
  IStarship,
  IFilmElement,
  ISShipElement,
  ISpecies,
  IPlanets,
} from '../typings/models';

const instanceOfIFilm = (object: any): object is IFilmElement => {
  return 'title' in object;
};

const instanceOfISShip = (object: any): object is ISShipElement => {
  return 'name' in object;
};

export const makeNamesFromUrls = (
  urlArr: string[],
  collection: (IFilm | IStarship)[]
) => {
  return collection
    .filter((element) => urlArr.includes(element.url))
    .map((element) => {
      let checkingElement: any = element;

      return instanceOfIFilm(checkingElement)
        ? checkingElement.title
        : instanceOfISShip(checkingElement)
        ? checkingElement.name
        : null;
    });
};

export const findNameByUrl = (
  characteristicUrl: string,
  collection: (ISpecies | IPlanets)[]
) => {
  let item = collection.find((element) => element.url === characteristicUrl);
  return item?.name ?? 'Human';
};
