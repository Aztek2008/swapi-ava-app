export const makeStateFromUrls = (urlArr, collection, characteristic) => {
  urlArr.map((url) =>
    collection.filter((element) => {
      if (url === element.url) {
        if (typeof urlArr === 'string') {
          characteristic = element.name;
        }
        characteristic.push(element.title || element.name);
      }
      return element;
    })
  );
};
