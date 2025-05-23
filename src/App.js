//import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import appStore from './Utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
    <Body/>
    </Provider>

  );
}

export default App;
