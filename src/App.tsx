

import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice';
import { RootState } from './redux/store';
import { useAppDispatch, userAppSelector } from './redux/hook';

function App() {

const dispatch = useAppDispatch();

const {count}= userAppSelector( (state:RootState) => state.counter);

console.log(count);

const handleIncrement = (amount:number) =>{
  dispatch(increment(amount));
}

const handleDecrement = (amount:number) =>{
  dispatch(decrement(amount));
}

  return (
    <div>
       <h1>Coounter with Redux</h1>

       <button onClick={() => handleIncrement(1)}>Increment</button>
       <button onClick={ () =>handleIncrement(5)}>Increment By 5</button>
       <div>{count}</div>
       <button onClick={ () =>handleDecrement(1)}>Decrement</button>
       <button onClick={ () =>handleDecrement(5)}>Decrement By 5</button>
    </div>
  )
}

export default App
