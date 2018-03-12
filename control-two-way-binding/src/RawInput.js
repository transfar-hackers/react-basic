import React, {Component} from 'react'

export class RawInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ...props
    }
  }

  nameChangeHandler = (e) => {
    console.log(`name e: `, e)
    this.setState({...this.state, ...{name: e.target.value}})
  }

  render () {
    return (
      <div>
        <span>RAW controls --> controlled components: where the state of the inputs are from the state of the component</span>
        <hr />
        <div>
          <label>Name: </label>
          <input value={this.state.name} onChange={this.nameChangeHandler} />
        </div>
        <div>
          <label>Gender: </label>
          <input value={this.state.gender} onChange={this.nameChangeHandler} />
        </div>
      </div>
      );
  }

}

