import './App.css'
import PRODUCTS from './assets/data' 
import FilterableProductTable from './components/FilterableProductTable'

function App() {
  // i created products - a unique name to distinguish the prop FOR PRODUCTS//
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />      
    </>
  )
}

export default App
