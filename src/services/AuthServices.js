import auth from '@react-native-firebase/auth';
import '@react-native-firebase/functions';
import firebase from '@react-native-firebase/app';
import { getUserRegistrationInfo } from './DatabaseServices';

export async function onLogin(email, password, that) {

  if (!email || !password) {
    await that.setState({errorMsg: 'Email or password is incorrect'});
  } else {
    try {

      await auth().signInWithEmailAndPassword(email, password);

      let userRegistrationInfo = await getUserRegistrationInfo();

      console.log(userRegistrationInfo);

      that.props.navigation.navigate('VerifyPhone');

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

    try {
      const success = await firebase.functions().httpsCallable('getUserRegistrationInfo')(
        {},
      );
  
      if (success) {
        console.log(success);
        console.log(success.data[0].is_registered);
        console.log(success.data[0].email);

        if(success.data[0].is_registered !== 1) {

          const confirmation = await auth().signInWithPhoneNumber(success.data[0].phone_number);
          return confirmation;
      }
      } else {
        console.warn('Woops, looks like something went wrong!');
      }
    } catch (e) {
      console.error(e);
    }
}

export async function confirmPhoneVerificationCode(confirmation, code, that) {    

  try {
    await confirmation.confirm(code); // User entered code
    // Successful login - onAuthStateChanged is triggered
    //await firebase.auth().currentUser.linkWithCredential(facebookCredential);
    that.props.navigation.replace('ChangePassword');
  } catch (e) {
    that.setState({errorMsg: 'The verification code is incorrect!'});
  }

}

export async function changePassword(password1, password2, that) {

  if(password1 === password2) {
    try {
      await firebase.auth().currentUser.updatePassword(password);
  
      that.props.navigation.navigate('ChangePassword');
    } catch (e) {
      that.setState({errorMsg: e});
    }
  } else {
    that.setState({errorMsg: 'Passwords don\'nt match!'});
  }

}

export async function onLogOut(that) {    

  try {
    await auth().signOut(that);
    that.props.navigation.navigate('Login');
  } catch (e) {
    console.log(e);
  }

}

