import React, { Component } from 'react';
import Main from './components/Main/Main';
import * as moment from 'moment';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      dataIsReceived: false,
      adalabers: [],
      adalaberInfo: undefined
    }
  
    this.adalabersURL = 'https://api.github.com/orgs/adalab/members?per_page=200';
    this.userURL = 'https://api.github.com/users/'
  };

  componentDidMount() {
    this.fetchAdalabers();
  }

  fetchAdalabers = () => {
    fetch(this.adalabersURL)
    .then(response => response.json())
    .then(publicAdalabers => {
      let adalabers = [];
      for (const adalaber of publicAdalabers) {
        adalabers.push(adalaber.login)
      }
      this.setState({ adalabers })
    })
    .catch(error => error);
  }
  
    handleSelect = event => {
      this.fetchUser( event.target.value )
    }
  
  
    fetchUser = selectedAdalaber => {
      fetch(this.userURL + selectedAdalaber)
      .then(response => response.json())
      .then(adalaberInfo => {
        const {
          avatar_url,
          blog,
          followers,
          following,
          html_url,
          name,
          public_repos,
          location,
          created_at
        } = adalaberInfo;
  
        this.setState({
          adalaberInfo: {
            selectedAdalaber,
            avatar_url,
            blog,
            followers,
            following,
            html_url,
            name,
            public_repos,
            location,
          }
        });
        this.calculateMemberSince( created_at );
      })
      .catch(error => error);
    }
  
  
    calculateMemberSince( created_at ) {
      const { adalaberInfo } = this.state;
      if (adalaberInfo) {
        const created = moment( created_at );
        const today = moment();
        let years, months, days, sinceWhen;
  
        const _years = today.diff(created, 'year');
        created.add(_years, 'years');
        if (_years === 0) {
          years = '';
        } else if (_years === 1) {
          years = '1 año';
        } else {
          years = `${_years} años`;
        }
  
        const _months = today.diff(created, 'months');
        created.add(_months, 'months');
        if (_months === 0) {
          months = '';
        } else if (_months === 1) {
          months = '1 mes y ';
        } else {
          months = `${_months} meses y `;
        }
  
        const yearMonthConnector =
          years === '' ? ''
          : months === '' ? ' y '
          : ', '
  
        const _days = today.diff(created, 'days');
        if (_days === 1) {
          days = '1 día';
        } else {
          days = `${_days} días`;
        }
  
        sinceWhen = years + yearMonthConnector + months + days;
        this.setState({ adalaberInfo: { ...adalaberInfo, sinceWhen } });
        }
    }
  
  
    render() {
      const { adalabers, adalaberInfo } = this.state;
      const { handleSelect } = this;
  
      return (
        <Main
          adalabers = {adalabers}
          handleSelect = {handleSelect}
          adalaberInfo = {adalaberInfo}
        />
      );
    }
  }

export default App;