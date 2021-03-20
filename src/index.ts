import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([10, 32, 87, 3, 14]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
