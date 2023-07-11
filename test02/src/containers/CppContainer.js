
import { useSelector } from 'react-redux';
import Cpp from '../component/Cpp';

const CppContainer = () =>  { const num = useSelector(state => state.num); return ( <Cpp num={num}/>) }
export default CppContainer;