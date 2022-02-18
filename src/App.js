import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux';
import UserDataContainer from './Component/UserDataContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserDataContainer />
      </div>
    </Provider>
  );
}

export default App;
