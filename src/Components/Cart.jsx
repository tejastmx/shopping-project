import React, { Component } from "react";
import jsPDF from "jspdf";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index1: 0,
      index2: 0,
    };
  }

  renderCart = () => {
    const cart = this.props.cart;
    let total = 0;
    const cartRow = cart.map((val) => (
      <>
        {val.name !== "" ? (
          <div className="inner-cart">
            <img src={val.img} />
            <h3>{val.name}</h3>
            <h3>Rs.{val.price}</h3>
            <h4>{val.quant}</h4>
            <div className="hideTotal">{(total += val.price * val.quant)}</div>
          </div>
        ) : (
          <div></div>
        )}
      </>
    ));
    this.getTotal(total);
    return cartRow;
  };

  getTotal = (total) => {
    let showtotal = document.getElementById("total");
    if (showtotal !== null) {
      showtotal.innerHTML = total;
    }
  };
  closeCart = () => {
    let cart = document.getElementById("cart");
    cart.style.display = "none";
    let product = document.getElementById("product");
    product.classList.remove("blur");
    product.classList.add("product");
  };
  generateBill = () => {
    var total = document.getElementById("total").innerText;
    var doc = jsPDF("p", "pt");
    doc.text( 
      20,
      30,
      "You need to pay : " +
        total +
        " " +
        " " +
        " " +
        " " +
        " " +
        " " +
        "||" +
        " " +
        " " +
        " " +
        " " +
        " " +
        " " +
        " " +
        "Thank you for shopping"
    );
    const cart = this.props.cart;
    const cartRow = cart.map((val, index) => {
      doc.text(
        40 + index,
        60 * index,
        "Prodcut Name:" +
          " " +
          val.name +
          " " +
          "||" +
          " " +
          "Prodcut price:" +
          " " +
          val.price +
          " " +
          "||" +
          " " +
          "Prodcut Quantity:" +
          " " +
          val.quant
      );
      this.setState({
        index1: this.state.index1 + 40 + index,
        index2: this.state.index2 + 40 * index,
      });
    });
    doc.save("Bill.pdf");
    return cartRow;
  };
  render() {
    return (
      <div className="cart" id="cart">
        <h2>
          Cart <button onClick={this.closeCart}> X </button>
        </h2>
        <hr />
        {this.renderCart()}
        <hr />
        <div className="cart-footer">
          <h3>
            Total Rs. <span id="total"> </span>
          </h3>
          <button onClick={this.generateBill}>Buy Now</button>
        </div>
      </div>
    );
  }
}
export default Cart;
