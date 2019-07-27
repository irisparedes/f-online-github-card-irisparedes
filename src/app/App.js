import React, { Component } from 'react';
import Main from './components/Main/Main';
//import * as moment from 'moment';

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
      })
      .catch(error => error);
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