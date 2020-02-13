import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

//routes
import AppNavigation from '../../routes/app';

class Splash extends Component {
  render() {
    return <AppNavigation />;
  }
}

const mapStateToProps = state => ({
  authorize: state.auth.authorize,
});

export default connect(mapStateToProps)(Splash);
