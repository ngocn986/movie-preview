import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/roboto/500.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCTYiREd_fQ9ND4B2qHnyScMzJ2LZXdO7Q',
  authDomain: 'moviepreview-1aad5.firebaseapp.com',
  projectId: 'moviepreview-1aad5',
  storageBucket: 'moviepreview-1aad5.appspot.com',
  messagingSenderId: '295145459963',
  appId: '1:295145459963:web:1bebb0b2f019c9d8c1a05e',
  measurementId: 'G-NJ921ZQVE1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>
);
