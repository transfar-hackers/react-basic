/**
* author: j-sparrow
* description:
*   a form with dynamic rows, and the state of the whole form is still
* managed.
*
*/
import React, {Component} from 'react'

export class DynamicFieldsForm extends Component {
  constructor (props) {
    super(props)

    this.state = {...props, rows: [{name: 'Jack Sparrow', age: 32, gender: 'male'}, {name: 'Jack Sparrow', age: 32, gender: 'male'}]}
  }

  textChangeHandler = (e) => {
    let name = e.target.getAttribute('name');
    let index = Number(e.target.getAttribute('index'))
    let value = e.target.value;
    debugger;

    if (name && index) {
      let originalItem = {...this.state.rows[index]}
      switch (name) {
        case 'name': {
          originalItem.name = value;
          break;
        }
        case 'age': {
          originalItem.age = value;
          break;
        }
        case 'gender': {
          originalItem.gender = value;
          break;
        }
        default:
      }

      let rows = [...this.state.rows]
      // let updatedRows = rows.splice(index, 1, originalItem)
      rows.splice(index, 1, originalItem)
      this.setState(prevState => { return {rows}})
    }
  }

  getRows = () => {
    let i = 0, l = this.state.rows.length, html = [];

    for (i = 0; i < l; i++) {
      html.push((<div>
        <label>name: </label><input name='name' index={i} value={this.state.rows[i].name} onChange={(e) => {this.textChangeHandler(e)}} />
        <label>age: </label><input name='age' index={i} value={this.state.rows[i].age} onChange={(e) => {this.textChangeHandler(e)}} />
        <label>gender: </label><input name='gender' index={i} value={this.state.rows[i].gender} onChange={(e) => {this.textChangeHandler(e)}} />
        <button onClick={this.addRow}>Add New Person</button>
      </div>))
    }

    return html;
  }

  addRow = () => {
    this.state.rows.length < 5 ?
    this.setState(prevState => {return {rows: [...prevState.rows, {name: '', age: '', gender: ''}]}}) :
    ''
  }

  render = () => {
    return (<div>{this.getRows()}</div>)
  }

}
