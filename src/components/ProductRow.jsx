function ProductRow (props) {
    const name = props.product.stocked ? 
        props.product.name 
      : 
      <span style={{color: "red"}} >{props.product.name}</span>
    
    return (
      <tr>
        <td>{name}</td>
        <td>{props.product.price}</td>
  
        {/* This would be the code for the destructured props. 
        Instead of defining props in the component parameter 
        it would instead look like this ({ products }) */}
        {/* <td>{product.name}</td>
        <td>{product.price}</td> */}
      </tr>
    )
  }
  
  export default ProductRow