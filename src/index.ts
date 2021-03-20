import { LinkedList } from './dataStructures/LinkedList';
import { CharactersCollection } from './dataStructures/CharactersCollection';
import { NumbersCollection } from './dataStructures/NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([10, 32, 87, 3, 14]);
const charactersCollection = new CharactersCollection(
  'jDSKJjdjSjNXNFbfieUWUEIRooROWIWPERdksdklfa'
);

numbersCollection.sort();
charactersCollection.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(6);
linkedList.add(1);
linkedList.add(2);
linkedList.sort();
console.log(linkedList.print());
