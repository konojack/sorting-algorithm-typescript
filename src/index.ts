import { LinkedList } from './dataStructures/LinkedList';
import { CharactersCollection } from './dataStructures/CharactersCollection';
import { NumbersCollection } from './dataStructures/NumbersCollection';
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

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(6);
linkedList.add(1);
linkedList.add(2);
const sorterList = new Sorter(linkedList);
sorterList.sort();
console.log(linkedList.print());
