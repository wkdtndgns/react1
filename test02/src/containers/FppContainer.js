
import { useSelector } from 'react-redux';
import Fpp from '../component/Fpp';

const FppContainer = () =>  { const num = useSelector(state => state.num); return ( <Fpp num={num}/>) }
export default FppContainer;