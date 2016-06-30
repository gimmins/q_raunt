import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeGuestFromList } from '../actions/guest_list_action';

class GuestList extends Component {

  onDeleteButtonClick(event) {
    console.log(event.target.value);
    this.props.removeGuestFromList(event.target.value);
  }

  renderGuestList(guestData, guestIndex) {
    const name = guestData.name;
    const party = guestData.party;
    const notes = guestData.notes;

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{party}</td>
        <td>{notes}</td>
        <td>
          <button type="button"
                  onClick={this.onDeleteButtonClick.bind(this)}
                  value={guestIndex}
                  className="btn btn-primary"> Delete
          </button>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <div className="modal-header">
          Guest List
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Party</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {this.props.guestlist.map(this.renderGuestList.bind(this))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeGuestFromList }, dispatch);
}

// ES6 way of { weather } === { weather: weather }
function mapStateToProps({ weather, guestlist }) {
  return { weather: weather, guestlist: guestlist };
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestList);
