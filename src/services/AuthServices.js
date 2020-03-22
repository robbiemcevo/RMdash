import auth from '@react-native-firebase/auth';
import '@react-native-firebase/functions';
import firebase from '@react-native-firebase/app';
import { getUserRegistrationInfo } from './DatabaseServices';
import AsyncStorage from '@react-native-community/async-storage';

export async function onLogin(email, password, that) {

  if (!email || !password) {
    await that.setState({errorMsg: 'Email or password is incorrect'});
  } else {
    try {

      await auth().signInWithEmailAndPassword(email, password);

      let userRegistrationInfo = await getUserRegistrationInfo();
      console.log(userRegistrationInfo);
      console.log(userRegistrationInfo.is_registered);

      await AsyncStorage.setItem('userEmail', email);

      if(userRegistrationInfo.is_registered === 1) {
        that.props.navigation.navigate('MainApp');
      } else {
        that.props.navigation.navigate('VerifyPhone', {
          userPhoneNumber: userRegistrationInfo.phone_number
        });
      }

    } catch (e) {
      if(e.code == 'auth/invalid-email' || e.code == 'auth/user-not-found' || e.code == 'auth/wrong-password') {
        await that.setState({errorMsg: 'Email or password is incorrect'});
      } else {
        await that.setState({errorMsg: e.message});
      }
    }
  }
}

export async function sendPhoneVerificationCode(phone_num) {    

    try {
        const { verificationId } = await auth().verifyPhoneNumber(phone_num);

        return verificationId;
    } catch (e) {
      console.error(e);
    }
}

export async function confirmPhoneVerificationCode(verificationId, code, that) {    

  try {
    const credential = await firebase.auth.PhoneAuthProvider.credential(verificationId, code);
    await firebase.auth().currentUser.linkWithCredential(credential);
    that.props.navigation.replace('ChangePassword');
  } catch (e) {
    that.setState({errorMsg: 'The verification code is incorrect!'});
    console.log(e);
  }

}

export async function changePassword(password1, password2, that) {

  const decimal =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  if(password1 != password2) {
    that.setState({errorMsg: 'Passwords don\'t match!'});
  } else if(!password1.match(decimal)) {
    that.setState({errorMsg: 'Password is not secure enough!'});
  } else {
    try {
      await auth().currentUser.updatePassword(password1);
      await updateRegistrationStatus();
  
      that.props.navigation.navigate('MainApp');
    } catch (e) {
      that.setState({errorMsg: e});
    }
  }
}

export async function onLogOut(that) {    

  try {
    await auth().signOut(that);
  } catch (e) {
    console.log(e);
  }

}

export async function onAutoLogOut() {    

  try {
    await auth().signOut();
  } catch (e) {
    console.log(e);
  }

}

async function updateRegistrationStatus() {    

  try {
    const success = await firebase.functions().httpsCallable('updateRegistrationStatus')(
      {},
    );

    if (!success) {
      console.warn('Woops, looks like something went wrong!');
    }
  } catch (e) {
    console.error(e);
  }

}

