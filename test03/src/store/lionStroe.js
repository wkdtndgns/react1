import { makeAutoObservable } from 'mobx';

class LionStore{
    count = 0;
    constructor(){
      makeAutoObservable(this);
    }
  
    inc(){
      console.log('inc');
      this.count +=1;
    }
}
const ls = new LionStore();
export default ls;