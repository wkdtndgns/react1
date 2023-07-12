
import { makeAutoObservable } from 'mobx';
class TigerStore{
  count = 0;
  constructor(){
    makeAutoObservable(this);
  }

  inc(){
    console.log('inc');
    this.count +=1;
  }
}
const ts = new TigerStore(); 
export default ts;