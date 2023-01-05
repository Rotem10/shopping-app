console.log('hello');

interface ICacheAlgo<K, V> {
  getElement(key: K): V | undefined;
  setElement(key: K, value: V): K | undefined;
  removeElement(key: K): boolean;
}

type K = any;
type V = any;

abstract class AbstractCacheAlgo{
  protected capacity:number;
  protected cache :Map<K,V>;

    constructor(capacity:number ,cache:Map<K,V>) {
      this.capacity = capacity;
      this.cache = cache;

    }

    getElement(key:K){

    }

    removeElement(key:K){

    }

    

    
}
