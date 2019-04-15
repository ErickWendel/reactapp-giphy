import React, { Component } from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
class Table extends Component {
  render() {
    const {gifs} = this.props
    return (
      <table>
         <TableHeader /> 
         <TableBody gifs={gifs}/> 
      </table>
    )
  }
}

export default Table