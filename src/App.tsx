
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice';

function App() {

const dispatch = useDispatch();

const {count}= useSelector( (state) => state.counter);

console.log(count);

const handleIncrement = () =>{
  dispatch(increment());
}

const handleDecrement = () =>{
  dispatch(decrement());
}

  return (
    <div>
       <h1>Coounter with Redux</h1>

       <button onClick={handleIncrement}>Increment</button>
       <div>{count}</div>
       <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default App
