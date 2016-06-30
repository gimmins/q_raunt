import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addGuestToList } from '../actions/guest_list_action';

export default class GuestInputForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '', party: '', notes: '' };

    this.onGuestNameInputChange = this.onGuestNameInputChange.bind(this);
    this.onPartyNumberInputChange = this.onPartyNumberInputChange.bind(this);
    this.onPreferencesInputChange = this.onPreferencesInputChange.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onGuestNameInputChange(event) {
    this.setState({ name: event.target.value });
  }

  onPartyNumberInputChange(event) {
    this.setState({ party: event.target.value });
  }

  onPreferencesInputChange(event) {
    this.setState({ notes: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.addGuestToList(this.state);
    this.setState({ name: '', party: '', notes: '' });
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
      <div className="form-control">
        <input
          placeholder="Guest Name"
          value={this.state.name}
          onChange={this.onGuestNameInputChange} />
        <input
          placeholder="Party"
          value={this.state.party}
          onChange={this.onPartyNumberInputChange} />
        <input
          placeholder="Notes"
          value={this.state.notes}
          onChange={this.onPreferencesInputChange} />
        </div>

        <span className="form-control">
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addGuestToList }, dispatch);
}

// Whenever we are passing a function that is supposed to map our dispatch to
// the props of our container, it always is passed as a second argument, first
// argument is null
export default connect(null, mapDispatchToProps)(GuestInputForm);
