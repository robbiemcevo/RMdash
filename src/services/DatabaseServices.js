import '@react-native-firebase/functions';
import firebase from '@react-native-firebase/app';

export async function getClientData(client_id) {
  try {
    const success = await firebase.functions().httpsCallable('getClientProfile')(
      {client_id: client_id},
    );

    if (success) {
      let data = success.data;
      console.log(data);
      return data;
    } else {
      console.warn('Woops, looks like something went wrong!');
    }
  } catch (e) {
    console.error(e);
  }
}

export async function getClientsList() {
  try {
    const success = await firebase.functions().httpsCallable('getClientsList')(
      {},
    );

    if (success) {
      let data = success.data;
      console.log(data);
      return data;
    } else {
      console.warn('Woops, looks like something went wrong!');
    }
  } catch (e) {
    console.error(e);
  }
}

export async function getUserRegistrationInfo() {
  try {
    const success = await firebase.functions().httpsCallable('getClientsList')(
      {},
    );

    if (success) {
      console.log('user registration info success!');
      console.log(success.data[0].name);
      return success.data;
    } else {
      console.warn('Woops, looks like something went wrong!');
    }
  } catch (e) {
    console.error(e);
  }
}
