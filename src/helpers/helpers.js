import { kittenUrls, kittenNames } from '../data/kittenData';

const helpers = {
  randomKittenGenerator: (amount) => {
    const randomList = [];
    const randomNames = kittenNames.sort(()=>Math.random()-0.5)
    const randomKittens = kittenUrls.sort(()=>Math.random()-0.5)
    //TODO amount less than length of kittens
    for(var i = 0; i < amount; i++){
      randomList.push({'name': randomNames[i], 'url': randomKittens[i].url});
    };
    return randomList;
  }
}

export default helpers;
