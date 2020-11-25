import React, { Component } from 'react'
import Axios from "axios";

export default class Products extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            data : [],
            err :"",
            quantity:1
        }
    }

    componentDidMount(){
        Axios.get("https://api.mocki.io/v1/7bd0682b")
        .then(res=>{
            this.setState({
                data : res.data.products
            })
        })
        .catch(err=>{
            this.setState({
                err:err
            })
        })
    }

    addQuant = (e)=>{
        let quantity = e.target.value
        this.setState({
            quantity:quantity
        })
    }
    renderProduct=()=>{
        const data = this.state.data
        const products = data.map(product=>(
            <div key={product.id}>
                <div className="inner-product">
                    <img src={product.image} alt=""/>
                    <p className="name">{product.name}</p>
                    <p>Rs. {product.price}</p>
                    <input type="number" min="1" onChange={this.addQuant}/>
                    <button onClick={()=>this.props.addCart(product.name,product.price,this.state.quantity,product.image)}>Add to cart</button>
                </div>
            </div>
        )); 
        return products 
        
    }
    render() {
        return (
            <div>
                <div className="product" id="product">
                    {this.renderProduct()}  
                </div>
                <div id="message">
                    <h3> Product added to the cart </h3>
                </div>
            </div>
        )
    }
}