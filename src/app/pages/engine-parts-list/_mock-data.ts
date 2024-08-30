import { EnginPartListItem } from './engine-parts-list.model';
import { FilterTableColumn } from '../shared/filter-table/filter-table.model';

const categories = ['Piston', 'Crankshaft', 'Camshaft', 'Valve', 'Gasket'];
const shops = ['AutoParts Inc.', 'EngineMaster Shop', 'FastParts Outlet', 'Gearhead Supplies'];

export function generateEnginPartList(): EnginPartListItem[] {
  const enginPartList: EnginPartListItem[] = [];

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

export const enginTableColumns: FilterTableColumn<EnginPartListItem>[] = [
  {
    title: 'Name',
    property: 'name',
    filterFn: null,
    filterMultiple: false,
    listOfFilter: [],
    sortDirections: [null],
    sortFn: null,
    searchable: true,
  },
  {
    title: 'Category',
    property: 'category',
    filterFn: null,
    filterMultiple: true,
    listOfFilter: [],
    sortDirections: [null],
    sortFn: null,
    searchable: true,
  },
  {
    title: 'Price',
    property: 'price',
    filterFn: null,
    filterMultiple: false,
    listOfFilter: [],
    sortDirections: [null],
    sortFn: null,
    searchable: false,
  },
  {
    title: 'Shop',
    property: 'shopToBuy',
    defaultFilter: true,
    filterFn: (shopToBuy: string, data: EnginPartListItem) => data.shopToBuy.indexOf(shopToBuy) !== -1,
    filterMultiple: false,
    listOfFilter: [
      { text: 'AutoParts Inc.', value:'AutoParts Inc' },
      { text: 'EngineMaster Shop', value:'EngineMaster Shop' },
      { text: 'FastParts Outlet', value:'FastParts Outlet' },
      { text: 'Gearhead Supplies', value:'Gearhead Supplies' }
    ],
    sortDirections: [null],
    sortFn: null,
    searchable: true,
  },
  {
    title: 'Delivery estimate',
    property: 'deliveryEstimate',
    filterFn: null,
    filterMultiple: false,
    listOfFilter: [],
    sortDirections: ['ascend', 'descend', null],
    sortFn: (a: EnginPartListItem, b: EnginPartListItem) => a.deliveryEstimate - b.deliveryEstimate,
    searchable: false,
  }
];
