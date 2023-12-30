import React,{useState,useContext} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'
import {UserContext} from '../App'


function Cards() {
  let {products,setProducts} = useContext(UserContext)

  return (<>
  <div className="text-center" id="container">
 
    {products.map((e,i)=>{

    const [quantity,setQuantity]=useState(0)
  

    const addQuantity = () => {
      setQuantity(quantity+1)
    
     }

    const removeQuantity = () => {
      setQuantity(quantity-1)
    }
return (
    <Card style={{ width: '18rem' }} key={i}>
    <Card.Img variant="top" src={e.thumbnail} />
  <Card.Body >
    <Card.Title>{e.title}</Card.Title>
    <Card.Text >{e.description}</Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush" >
    <ListGroup.Item>Price:${e.price}</ListGroup.Item>
    <ListGroup.Item>Discount:{e.discountPercentage}</ListGroup.Item>
    <ListGroup.Item>rating:{e.rating}</ListGroup.Item>
    <ListGroup.Item>StockItem:{e.stock}</ListGroup.Item>
    <ListGroup.Item>Brand:{e.brand}</ListGroup.Item>
    <ListGroup.Item>Category:{e.category}</ListGroup.Item>
  </ListGroup>
  <Card.Body>
  
  
  <Button variant="success" className="text-center" onClick={()=>addQuantity()}>+</Button>
  <div className="text-center" >{quantity}</div> 
  <Button variant="danger" className="text-center"onClick={()=>removeQuantity()}>-</Button><br/><br/>
  <div><p className="text-center" >TotalAmount:${e.price*quantity}</p></div>

  <Button variant="primary"  >Add to Cart</Button><br/><br/>
 
  </Card.Body>
</Card>)
  })}
</div>  
</>)

}
export default Cards