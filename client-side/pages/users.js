export async function getStaticProps() {
  const data = [
      {
          id: 1,
          fullname: 'Jesmin Akther Nancy',
          username: 'Nancy',
          role: 'admin',
          lastactivity: '12/12/2021',
      },
      {
          id: 2,
          fullname: 'Jesmin Akther Nancy',
          username: 'Nancy',
          role: 'admin',
          lastactivity: '12/12/2021',
      },
      {
          id: 3,
          fullname: 'Jesmin Akther Nancy',
          username: 'Nancy',
          role: 'admin',
          lastactivity: '12/12/2021',
      },
      {
          id: 4,
          fullname: 'Jesmin Akther Nancy',
          username: 'Nancy',
          role: 'admin',
          lastactivity: '12/12/2021',
      },

  ]

  return {
      props:{
          dataTable:data,
      }
  }


}



import React, { Component } from 'react';
import ListUser from "../components/listUser";
import NavMenuDesktop from '../components/NavMenuDesktop';

export default class users extends Component {
  render() {
    return (

      <div>
        <NavMenuDesktop/>
        <ListUser dataTable={this.props.dataTable}/>

      </div>
  
    )
  }
}
