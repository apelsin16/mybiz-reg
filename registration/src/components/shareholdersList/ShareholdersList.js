import React, { Component } from 'react';

export default class ShareholdersList extends Component {

  handleDeleteShareholder = ( e, num ) => {
    e.preventDefault();
    this.props.onDeleteShareholder(num);
  };

  render(){
    return (
      <ul>
        {this.props.shareholders.map((item, index) => (
            <li key={index}> {item.LNAME}
              <button onClick={(e) => this.handleDeleteShareholder(e, index)} className='minjust-link'>Видалити</button>
            </li>
          )
        )}
      </ul>
    )}};
