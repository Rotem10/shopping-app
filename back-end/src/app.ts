export interface ICacheAlgo<K, V> {
  getElement(key: K): V | undefined;
  setElement(key: K, value: V): K | undefined;
  removeElement(key: K): boolean;
}

export abstract class AbstractCacheAlgo<K, V> {
  protected cache: Map<K, V>;
  protected capacity: number;

  constructor(capacity: number = 10, cache: Map<K, V> = new Map<K, V>()) {
    this.capacity = capacity;
    this.cache = cache;
  }

  isFull(): boolean {
    return this.capacity === this.cache.size;
  }

  removeElement(key: K): boolean {
    return this.cache.delete(key);
  }
}
