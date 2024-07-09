import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment } from './components/store/counterSlice'
import { updatedCount } from './components/store/counterSlice'
import Navbar from './components/Navbar'
import useFetch from './components/useFetch'
import Product from './components/Product'

import './App.css'

function App() {
  const value = useSelector(state => state.counter.value);
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  const{isLoading,error,data}= useFetch("https://fakestoreapi.com/products")
  console.log(data)
  return (
    <>
      <Navbar />
     
      <div className='container d-flex flex-wrap justify-content-between'>
      {data && data?.length > 0 ? data?.map((item,key)=>(
          <Product data={item} key={key} />
      )) : "Loading"}
      </div>
      <button className='btn' onClick={() => dispatch(increment())} >COUNTER {value}</button>
      <button onClick={() => dispatch(updatedCount(5))} >COUNTER {count}</button>
    </>
  )
}

export default App
