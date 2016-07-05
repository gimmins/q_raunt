import React, { Component } from 'react';

export default class GuestRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.party}</td>
        <td>{this.props.notes}</td>
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
