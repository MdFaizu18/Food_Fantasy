import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import customFetch from './utils/customFetch.js';
import { AuthProvider } from './context/AuthProvider.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import store from './app/store.js'
import { Provider } from 'react-redux'
import './index.css'

const index = '';
async function fetchData() {
  await customFetch.get("/test");
}
fetchData();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    <ToastContainer position='top-center' />
    </AuthProvider>
  </React.StrictMode>,
)
