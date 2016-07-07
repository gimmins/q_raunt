import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeGuestFromList } from '../actions/guest_list_action';
import GuestRows from '../containers/guest_rows';

class GuestList extends Component {

  onDeleteButtonClick(event) {
    this.props.removeGuestFromList(event.target.value);
  }

  renderGuestList(guestData, guestIndex) {
    const name = guestData.name;
    const party = guestData.party;
    const notes = guestData.notes;

    return (
      <GuestRows key={guestIndex}
                 row={guestIndex}
                 name={guestData.name}
                 party={guestData.party}
                 notes={guestData.notes}
                 onDeleteButtonClick={this.onDeleteButtonClick.bind(this)}
                 />
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

function mapStateToProps({ guestlist }) {
  return { guestlist: guestlist };
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestList);
