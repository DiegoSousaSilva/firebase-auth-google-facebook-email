import React from 'react';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: "AIzaSyDsqxSsVIHB4b16v4tdky2-E1vf3djkQZ8",
  authDomain: "react-native-firebase-e0285.firebaseapp.com"
})

class App extends React.Component {

  state = {isSignedIn:false};

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks:{
      signSuccess: () => false
    }
  }

  componentDidMount = ()=>{

    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
    })
    
  }

  render(){
    return (
      <div className="App">
       {this.state.isSignedIn ?
          <span> 
            <div>Signed In!</div>
            <button onClick={()=> firebase.auth().signOut()}>Sign out</button>
          </span>
          :
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
            />
       }
      </div>
    );
  }
}

export default App;
