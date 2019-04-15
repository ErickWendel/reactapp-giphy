import React, { Component } from 'react'
const TableBody = ({gifs}) => {
    const rows = gifs.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.title}</td>
            <td>
            <img src={row.imageUrl}></img>
            </td>
            <td>{row.source}</td>
          </tr>
        )
      })
    
    return <tbody>{rows}</tbody>
}

export default TableBody