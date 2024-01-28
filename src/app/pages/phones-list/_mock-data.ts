import { PhoneListItem } from './phones-list.model';
import { FilterTableModel } from '../shared/filter-table/filter-table.model';

const shops = ['Rozetka', 'TTT', 'Comfy', 'Foxtrot'];
const brandsList = ['Nokia', 'Sony', 'Motorola'];
const phoneList: PhoneListItem[] = [];

export function generatePhoneList(): PhoneListItem[] {
  for (let i = 1; i <= 1000; i++) {
    const phone = {
      id: i,
      name: `Model ${i}`,
      price: getRandomInt(10, 200),
      brand: brandsList[getRandomInt(0, brandsList.length -1)],
      shopToBuy: shops[getRandomInt(0, shops.length - 1)],
    };
    phoneList.push(phone);
  }

  return phoneList;
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const phoneTableColumns: FilterTableModel[] = [
  {
    columnName: 'Name',
    rowName: 'name',
    filterFn: null,
    filterMultiple: false,
    listOfFilter: [],
    sortDirections: [null],
    sortFn: null
  },
  {
    columnName: 'Price',
    rowName: 'price',
    filterFn: null,
    filterMultiple: false,
    listOfFilter: [],
    sortDirections: [null],
    sortFn: null
  },
  {
    columnName: 'Shop',
    rowName: 'shopToBuy',
    filterFn: null,
    filterMultiple: false,
    listOfFilter: [],
    sortDirections: [null],
    sortFn: null
  },
  {
    columnName: 'Brand',
    rowName: 'brand',
    defaultFilter: true,
    filterFn: (brand: string, data: PhoneListItem) => data.brand.indexOf(brand) !== -1,
    filterMultiple: false,
    listOfFilter: [
      { text:'Nokia', value: 'Nokia' },
      { text:'Sony', value: 'Sony' },
      { text:'Motorola', value: 'Motorola' },
    ],
    sortDirections: [null],
    sortFn: (a: PhoneListItem, b: PhoneListItem) => a.price - b.price
  }
];
