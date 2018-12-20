import React, { Component } from "react";
import Person from "../Person/Person";
import LTD from "../LTD/LTD"

export default class ModalForm extends Component {
  state = {
    person: true,
    shareholder: {

    }
  };

  radioButtonChange = () => {
    this.setState({
        person: !this.state.person
    })
  };

render () {
  return (
    <form>
      <div className='row__wrapper'>
        <input type='radio' name="Person or LTD" id="person" defaultChecked onClick={this.radioButtonChange}/>
        <label className="label" htmlFor="person"><span><span></span></span>Фізична особа</label>

        <input type='radio' name="Person or LTD" id="LTD" onClick={this.radioButtonChange}/>
        <label className="label" htmlFor="LTD"><span><span></span></span>Юридична особа</label>
      </div>
      {this.state.person ? <Person { ...this.props } /> : <LTD { ...this.props } />}

    </form>
  )
  }
};
