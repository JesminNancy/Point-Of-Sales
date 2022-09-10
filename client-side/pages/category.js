export async function getStaticProps() {
  const data = [
      {
          id: 1,
          cat_name: 'Laptop',
          cat_code: 'Laptop110',
          cat_icon: '/laptop.png',

      },
      {
          id: 3,
          cat_name: 'Laptop',
          cat_code: 'Laptop110',
          cat_icon: '/laptop.png',
      },
      {
          id: 4,
          cat_name: 'Laptop',
          cat_code: 'Laptop110',
          cat_icon: '/laptop.png',
      },
      {
          id: 6,
          cat_name: 'Laptop',
          cat_code: 'Laptop110',
          cat_icon: '/laptop.png',
      },

  ]

  return {
      props:{
          dataTable:data,
      }
  }


}

import React, { Component } from 'react';
import ListCategory from "../components/listCategory";
import NavMenuDesktop from '../components/NavMenuDesktop';

export default class category extends Component {
  render() {
    return (
      <div>
        <NavMenuDesktop/>
        
        <ListCategory dataTable={this.props.dataTable}/>

      </div>
    )
  }
}

