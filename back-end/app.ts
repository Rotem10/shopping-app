console.log('hello');

interface ICacheAlgo<K, V> {
  getElement(key: K): V | undefined;
  setElement(key: K, value: V): K | undefined;
  removeElement(key: K): boolean;
}

// abstract class AbstractCacheAlgo {
//     constructor(parameters) {

//     }
// }
