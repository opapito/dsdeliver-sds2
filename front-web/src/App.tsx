import './App.css';

import Routes from './Routes';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
      <>
        <Routes />
        <ToastContainer />
      </>
     );
}

export default App;
