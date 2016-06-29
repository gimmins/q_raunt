import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(guest_data) {
    console.log(guest_data);
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  onDeleteButtonClick(event) {
    console.log('hello');
  }

  renderGuestList(guest_data) {
    const name = guest_data.name;
    const party = guest_data.party;
    const notes = guest_data.notes;

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{party}</td>
        <td>{notes}</td>
        <td>
          <button type="button" onClick={this.onDeleteButtonClick.bind(this)} className="btn btn-primary">Delete</button>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Party</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {/*{this.props.weather.map(this.renderWeather)}*/}
          {this.props.guestlist.map(this.renderGuestList.bind(this))}
        </tbody>
      </table>
    );
  }
}

// ES6 way of { weather } === { weather: weather }
function mapStateToProps({ weather, guestlist }) {
  return { weather: weather, guestlist: guestlist };
}

export default connect(mapStateToProps)(WeatherList);
