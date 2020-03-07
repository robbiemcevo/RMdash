import '@react-native-firebase/functions';
import firebase from '@react-native-firebase/app';

export async function getClientData() { 
  try {
  const success = await firebase.functions().httpsCallable('getClientProfile')({});

  if (success) {
    console.log('Pizza is on the way!');
    console.log(success);
    return success;
  } else {
    console.warn('Woops, looks like something went wrong!');
  }
} catch (e) {
  console.error(e);
}


}

