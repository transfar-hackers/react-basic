import React, {Component} from 'react'

export class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {...props}
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log('submit e: ', e, ' e.target: ', e.target, ' e.target.value: ', e.target.value)
    console.log('submit state data: ', this.state)
  }

  textChangeHandler = (e) => {
    console.log('text change e: ', e, ' e.target: ', e.target, ' e.target.value: ', e.target.value)
    if (e.target.getAttribute('name') === 'name') {
      console.log(`I'm changing the name`)
      this.setState({
        name: e.target.value
      })
    } else {
      console.log(`I'm changing the gender`)
      this.setState({
        gender: e.target.value
      })
    }
  }

  render = () => {
    return (
    <div>
      <span>Form controls --> controlled components: where the state of the inputs are from the state of the component</span>
      <form onSubmit={this.submitHandler}>
        <div>
        <label>Name: </label><input value={this.state.name} onChange={this.textChangeHandler} name='name' />
        <label>Gender: </label><input value={this.state.gender} onChange={this.textChangeHandler} name='gender' />
        </div>
        <div>
          <button onClick={this.submitHandler}>Submit</button>
        </div>
      </form>
    </div>)
  }
}
