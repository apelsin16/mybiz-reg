import React, { Component } from 'react';

export default class KVEDList extends Component {

  handleDeleteKVED = ( e, num ) => {
    this.props.onDeleteKVED(num);
  };

  render(){
    return (
<ul>
  {this.props.KVEDs.map(item => (
    <li key={item.KVEDNUM}> {item.KVEDNUM} - {item.KVEDNAME}
      <button onClick={(e) => this.handleDeleteKVED(e, item.KVEDNUM)} className='minjust-link'>Видалити</button>
    </li>
  )
  )}
</ul>
    )}};
