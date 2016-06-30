import React, { Component } from 'react';

import GuestInputForm from '../containers/guest_input_form';
import GuestList from '../containers/guest_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <GuestInputForm />
        <GuestList />
      </div>
    );
  }
}
