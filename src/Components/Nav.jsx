import React, { Component } from 'react'


export default class Nav extends Component {
    constructor(props)
    {
        super(props)
    }

    showCart = ()=>{
        let cart = document.getElementById('cart')
        let product = document.getElementById('product')
        if(cart!=null)
        {
            product.className='blur'
            cart.style.display='block'
        }
    }
    render() {
        console.log(this.props);
        return (
            <>
            <div className = "navbar">
               <h1>Market</h1>
                <h2 onClick={this.showCart}><i className="fa fa-shopping-cart" aria-hidden="true"></i></h2>
            </div>
            <div>
                <p className="count">{this.props.count}</p>
            </div>
            </>
        )
    }
}