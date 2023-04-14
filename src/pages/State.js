import React, { Component } from 'react'

export default class State extends Component {

    // state
    constructor(props) {
        super(props);
        this.state = {
            makanan : "bakso"
        }
    }

    // setState menggunakan function

    gantiMakanan(makanan_baru){
        this.setState({
            makanan : makanan_baru
        })
    }
    

  render() {
    return (
      <div>
        {/* state */}
        {this.state.makanan}         
        <br/>  <hr/>
        <button onClick={() =>this.gantiMakanan("nasi goreng")}>ganti makanan</button>
        
      </div>
    )
  }
}
