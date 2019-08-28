import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {
  constructor() {
    super()
    this.state = {
      color: ""
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} colorYouGet={this.passColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  // create a function with argument color, to update state
  getColor = (dataFromChild) => {
    this.setState({
      color: dataFromChild
    })
  }

  passColor = () => {
    return this.state.color
}

  render() {
    return (
      <div id="app">
        <ColorSelector colorYouChoose={this.getColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
