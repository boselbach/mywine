import { data } from './testData.json'

const getWines = () => {
  return new Promise((resolve, reject) => {
    let wineList = localStorage.getItem('wineList');
    let wines = wineList ? JSON.parse(wineList) : data;

    setTimeout(() => {
      resolve(wines);
    }, 0);
  });
}

const saveWines = (items) => {
  localStorage.setItem('wineList', JSON.stringify(items));
}

const getNextId = (items) => {
  return items.length ? Math.max(...items.map(item => item.id))+1 : 1;
}

export default {
  getWines,
  saveWines,
  getNextId
};