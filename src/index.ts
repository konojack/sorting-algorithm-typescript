import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([10, 32, 87, 3, 14]);
const charactersCollection = new CharactersCollection(
  'jDSKJjdjSjNXNFbfieUWUEIRooROWIWPERdksdklfa'
);
const sorterNumbers = new Sorter(numbersCollection);
const sorterChars = new Sorter(charactersCollection);
sorterNumbers.sort();
sorterChars.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
