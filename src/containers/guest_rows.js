import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
        changeNameOfExistingGuest,
        changePartyOfExistingGuest,
        changeNotesOfExistingGuest
        } from '../actions/guest_list_action';

export default class GuestRow extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.state.nameEdit = false;
    this.state.partyEdit = false;
    this.state.notesEdit = false;
    this.state.name = '';
    this.state.party = '';
    this.state.notes = '';

    this.onGuestNameInputChange = this.onGuestNameInputChange.bind(this);
    this.onGuestPartyInputChange = this.onGuestPartyInputChange.bind(this);
    this.onGuestNotesInputChange = this.onGuestNotesInputChange.bind(this);
    this.onEditButtonClick = this.onEditButtonClick.bind(this);

    this.onNameChangeFormSubmit = this.onNameChangeFormSubmit.bind(this);
    this.onPartyChangeFormSubmit = this.onPartyChangeFormSubmit.bind(this);
    this.onNotesChangeFormSubmit = this.onNotesChangeFormSubmit.bind(this);
  }

  onNameChangeFormSubmit(event) {
    event.preventDefault();
    this.props.changeNameOfExistingGuest(this.state.name, this.props.row);
    this.setState({ name: '', nameEdit: false });
  }

  onPartyChangeFormSubmit(event) {
    event.preventDefault();
    this.props.changePartyOfExistingGuest(this.state.party, this.props.row);
    this.setState({ party: '', partyEdit: false });
  }

  onNotesChangeFormSubmit(event) {
    event.preventDefault();
    this.props.changeNotesOfExistingGuest(this.state.notes, this.props.row);
    this.setState({ notes: '', notesEdit: false });
  }

  onGuestNameInputChange(event) {
    this.setState({ name: event.target.value });
  }

  onGuestPartyInputChange(event) {
    this.setState({ party: event.target.value });
  }

  onGuestNotesInputChange(event) {
    this.setState({ notes: event.target.value });
  }

  onEditButtonClick(event) {
    switch(event.target.getAttribute('value')) {
      case 'name':
        this.setState({ nameEdit: true });
        break;
      case 'party':
        this.setState({ partyEdit: true });
        break;
      case 'notes':
        this.setState({ notesEdit: true });
        break;
    }
  }

  render() {
    return (
      <tr>
        <td>
          {
            this.state.nameEdit ?
            <form onSubmit={this.onNameChangeFormSubmit} id={this.props.index} >
              <input
                defaultValue={this.props.name}
                onChange={this.onGuestNameInputChange} />
            </form>
            :
            <div>
              {this.props.name}
              <img
                className="icon-edit"
                value="name"
                onClick={this.onEditButtonClick}
                src="../../icon_edit.png"
                alt="edit" />
            </div>
          }
        </td>
        <td>
          {
            this.state.partyEdit ?
            <form onSubmit={this.onPartyChangeFormSubmit} id={this.props.index} >
              <input
                defaultValue={this.props.party}
                onChange={this.onGuestPartyInputChange} />
            </form>
            :
            <div>
              {this.props.party}
              <img
                className="icon-edit"
                value="party"
                onClick={this.onEditButtonClick}
                src="../../icon_edit.png"
                alt="edit" />
            </div>
          }
        </td>
        <td>
          {
            this.state.notesEdit ?
            <form onSubmit={this.onNotesChangeFormSubmit} id={this.props.index} >
              <input
                defaultValue={this.props.notes}
                onChange={this.onGuestNotesInputChange} />
            </form>
            :
            <div>
              {this.props.notes}
              <img
                className="icon-edit"
                value="notes"
                onClick={this.onEditButtonClick}
                src="../../icon_edit.png"
                alt="edit" />
            </div>
          }
        </td>
        <td>
          <button type="button"
                  onClick={this.props.onDeleteButtonClick}
                  value={this.props.name}
                  className="btn btn-primary"> Delete
          </button>
        </td>
      </tr>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
                              changeNameOfExistingGuest,
                              changePartyOfExistingGuest,
                              changeNotesOfExistingGuest
                            }, dispatch);
}

// Whenever we are passing a function that is supposed to map our dispatch to
// the props of our container, it always is passed as a second argument, first
// argument is null
export default connect(null, mapDispatchToProps)(GuestRow);
