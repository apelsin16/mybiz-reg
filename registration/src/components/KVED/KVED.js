import React, { Component } from 'react';
import kved from './kved.json';
import styles from './KVED.module.scss';

export default class KVED extends Component {

  state = {
    KVED: '',
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  saveKVED = e => {
    e.preventDefault();
    this.props.onAddKVED(this.state.KVED)
  }

  render() {
    return (
      <div className="row__wrapper">
      <p className="input__title">Код виду економічної діяльності</p>
        <select className={styles.option} onChange={this.handleInputChange}  value={this.state.KVED}  name="KVED">
        {kved.sections[0].map(
          item => (
            item.divisions.map(
              item => item.groups.map(
                  item => item.classes.map(
                    item => (
              <option className={styles.option} key={item.classCode}> {item.classCode} - {item.className}</option>
              )))
          ))
        )}
        </select>
        <button className='minjust-link' onClick={this.saveKVED}>Додати</button>
      </div>
    )
  }
}
