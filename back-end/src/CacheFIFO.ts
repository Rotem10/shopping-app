import { ICacheAlgo, AbstractCacheAlgo } from './app';

export class CacheFIFO<K, V>
  extends AbstractCacheAlgo<K, V>
  implements ICacheAlgo<K, V>
{
  #cache = this.cache;

  #isFull = (): boolean => super.isFull();

  getElement(key: K): V | undefined {
    if (!this.#cache.has(key)) return;
    return this.#cache.get(key);
  }

  setElement(key: K, value: V): K | undefined {
    if (!this.#cache.has(key)) {
      if (this.#isFull()) {
        const firstEntrieKey: K = this.#cache.entries().next().value[0];
        this.removeElement(firstEntrieKey);
        this.#cache.set(key, value);
        return firstEntrieKey;
      } else {
        this.#cache.set(key, value);
        return;
      }
    } else {
      this.removeElement(key);
      this.setElement(key, value);
    }
  }

  removeElement(key: K): boolean {
    return super.removeElement(key);
  }
}

const a = new CacheFIFO();
console.log(a);

// a.setElement('1', 1);
// a.setElement('2', 2);
// a.setElement('3', 3);
// a.setElement('4', 4);
// a.setElement('5', 5);
// a.setElement('6', 6);
// a.setElement('7', 7);
// a.setElement('8', 8);
// a.setElement('9', 9);
// a.setElement('10', 10);
// a.setElement('11', 11);
// console.log(a);
// console.log(a.getElement('1'));
// console.log(a.getElement('2'));
// console.log(a.removeElement('3'));
// console.log('first', a.setElement('12', 12));
// console.log(a);
