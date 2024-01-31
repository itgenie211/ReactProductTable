import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

function ProductTable (props) {
  const rows = []
  let lastCategory = null;

  props.products.forEach(product => {
    if(product.name.toLowerCase().indexOf(props.filterText.toLowerCase()) ===
     -1) {
      return;
    }

    if (props.inStockOnly && !product.stocked) {
      return
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow 
          key={product.category} 
          category={product.category} 
        />
      )
    }


    rows.push(
      <ProductRow 
        key={product.name} 
        product={product} 
      />
    )
    lastCategory = product.category
  })


  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
  
}

export default ProductTable