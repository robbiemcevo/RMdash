import auth from '@react-native-firebase/auth';

export async function onLogin(email, password, that) {

  if (!email || !password) {
    await that.setState({errorMsg: 'Email or password is incorrect'});
  } else {
    try {

      await auth().signInWithEmailAndPassword(email, password);
      console.log("success");

      that.props.navigation.replace('VerifyPhone');

    } catch (e) {
      if(e.code == 'auth/invalid-email' || e.code == 'auth/user-not-found' || e.code == 'auth/wrong-password') {
        await that.setState({errorMsg: 'Email or password is incorrect'});
      } else {
        await that.setState({errorMsg: e.message});
      }
    }
  }
}

export async function sendPhoneVerificationCode() {    
  
    const confirmation = await auth().signInWithPhoneNumber('+447774619431');

    console.log("functuon called");

    return confirmation;
}

export async function confirmPhoneVerificationCode(confirmation, code, that) {    

  try {
    await confirmation.confirm(code); // User entered code
    // Successful login - onAuthStateChanged is triggered
    that.props.navigation.replace('Dashboard');
  } catch (e) {
    that.setState({errorMsg: 'The verrification code is incorrect!'});
  }

}

export async function onLogOut(that) {    

  try {
    await auth().signOut(that);
    that.props.navigation.replace('Login');
  } catch (e) {
    console.log(e);
  }

}

