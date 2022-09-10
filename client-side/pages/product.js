export async function getStaticProps() {
  const data = [
      {
          id: 1,
          product_name: 'Laptop',
          product_code: 'Laptop110',
          product_icon: '/laptop.png',
          product_price: '10,000',
          product_category: 'Laptop',
          product_remarks: 'Asus',

      },
      {
          id: 4,
          product_name: 'Laptop',
          product_code: 'Laptop110',
          product_icon: '/laptop.png',
          product_price: '10,000',
          product_category: 'Laptop',
          product_remarks: 'Asus',
      },
      {
          id: 6,
          product_name: 'Laptop',
          product_code: 'Laptop110',
          product_icon: '/laptop.png',
          product_price: '10,000',
          product_category: 'Laptop',
          product_remarks: 'Asus',
      },
      {
          id: 10,
          product_name: 'Laptop',
          product_code: 'Laptop110',
          product_icon: '/laptop.png',
          product_price: '10,000',
          product_category: 'Laptop',
          product_remarks: 'Asus',
      },

  ]

  return {
      props:{
          dataTable:data,
      }
  }


}


import React, { Component } from 'react';
import ListProduct from "../components/listProduct";
import NavMenuDesktop from "../components/NavMenuDesktop";

class Product extends Component {
  render() {
      return (
          <div>
              <NavMenuDesktop/>
              <ListProduct dataTable={this.props.dataTable}/>
            

          </div>
      );
  }
}

export default Product;
