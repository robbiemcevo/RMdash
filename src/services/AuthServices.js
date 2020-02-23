import auth from '@react-native-firebase/auth';

export async function onLogin(email, password, that) {    

  if (!email || !password) {
    await that.setState({errorMsg: 'Email or password is incorrect'});
  } else {
    try {

      await auth().signInWithEmailAndPassword(email, password);
      console.log("success");

      const confirmation = await auth().signInWithPhoneNumber('+447774619431');
      that.props.navigation.replace('Dashboard');

    } catch (e) {
      if(e.code == 'auth/invalid-email' || e.code == 'auth/user-not-found' || e.code == 'auth/wrong-password') {
        await that.setState({errorMsg: 'Email or password is incorrect'});
      } else {
        await that.setState({errorMsg: e.message});
      }
    }
  }
}

export async function verifyPhone(that) {    
  
    const confirmation = await auth().signInWithPhoneNumber('+447774619431');
  
}