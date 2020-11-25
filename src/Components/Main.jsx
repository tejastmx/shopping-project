import React, { Component } from 'react'
import Cart from '../Components/Cart'
import Nav from './Nav'
import Products from './Products'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom' 

export default class Main extends Component {

    constructor(){
        super()
        this.state={
            
            cart:[
               {
                   name:'',
                   price:0,
                   quant:0,
                   img:"",
               } 
            ],
            count : 0
        }
    }

    addCart = (name,price,quant,img)=>{
    this.setState({
        cart:[...this.state.cart,{name:name,price:price,quant:quant,img:img}]
    })
    this.setState({
        count:this.state.count+1
    })
    let msg = document.getElementById('message')
    msg.style.display='block'
    setTimeout(this.hide,1000)
    }

    hide = ()=>{
        let msg = document.getElementById('message')
        msg.style.display = 'none'
    }
    render() {
        console.log(this.state.cart);
        return (
            <div>
                <Router>
                    <Nav count={this.state.count}/>
                    <Products addCart={this.addCart}/>
                    <Cart {...this.state} />
                </Router>
            </div>
        )
    }
}