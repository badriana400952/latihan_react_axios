import React, { Component } from 'react'

export default class Props extends Component {
  render() {
    return (
      <div>
        <h2>operan yang menjadi props { this.state.makanan}</h2>
        <hr/>
        <button onClick={() =>this.gantiMakanan("nasi goreng")}>ganti makanan</button>

      </div>
    )
  }
}
