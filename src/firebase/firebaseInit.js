import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: 'AIzaSyC9dqMi7TaE2imics_9THTXej_6C6J3LJQ',
	authDomain: 'invoice-app-kg.firebaseapp.com',
	projectId: 'invoice-app-kg',
	storageBucket: 'invoice-app-kg.appspot.com',
	messagingSenderId: '598390855618',
	appId: '1:598390855618:web:130bfb9688dbaba436a85b',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
