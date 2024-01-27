import { EnginPart } from './engine-parts-list.model';

export function generateEnginPartList(): EnginPart[] {
  const categories = ['Piston', 'Crankshaft', 'Camshaft', 'Valve', 'Gasket', 'Spark Plug', 'Oil Filter'];
  const shops = ['AutoParts Inc.', 'EngineMaster Shop', 'FastParts Outlet', 'Gearhead Supplies'];
  const enginPartList: EnginPart[] = [];

  for (let i = 1; i <= 1000; i++) {
    const part = {
      id: i,
      name: `Part ${i}`,
      category: categories[getRandomInt(0, categories.length - 1)],
      price: getRandomInt(10, 200),
      shopToBuy: shops[getRandomInt(0, shops.length - 1)],
      deliveryEstimate: getRandomInt(1, 14) // Delivery estimate in days
    };
    enginPartList.push(part);
  }

  return enginPartList;
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
