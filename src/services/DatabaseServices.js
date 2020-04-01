import '@react-native-firebase/functions';
import firebase from '@react-native-firebase/app';

export async function getClientData(client_id) {
  try {
    const success = await firebase
      .functions()
      .httpsCallable('getClientProfile')({client_id: client_id});

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
    const success = await firebase
      .functions()
      .httpsCallable('getUserRegistrationInfo')({});

    console.log(success);

    if (success) {
      return success.data[0];
    } else {
      console.warn('Woops, looks like something went wrong!');
    }
  } catch (e) {
    console.error(e);
  }
}

export async function updateClientKYC(data) {
  try {
    const success = await firebase.functions().httpsCallable('updateClientKYC')(
      {client_id: data.client_id, surname: data.surname, name: data.name, customer_status: data.customer_status,
        pep_status: data.pep_status, risk: data.risk, nationality: data.nationality, birthday: data.birthday,
        email: data.email, phone_number: data.phone_number, sector: data.sector, languages_of_reporting: data.languages_of_reporting,
        domicile: data.domicile, is_using_internet_banking: data.is_using_internet_banking,
        government_document_attached: data.government_document_attached, reporting_currency: data.reporting_currency,
        mailing_address: data.mailing_address, paper_mailing: data.paper_mailing, transit_account_number: data.transit_account_number,
        transit_account_holder: data.transit_account_holder, client_knowledge: data.client_knowledge, wealth_source: data.wealth_source},
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

export async function addClient(name, surname, email, phone_number) {
  try {
    const success = await firebase.functions().httpsCallable('AddClient')(
      {name: name, surname: surname, email: email, phone_number: phone_number},
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
