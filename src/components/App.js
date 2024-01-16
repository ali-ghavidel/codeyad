import { Provider } from 'react-redux'
import UserComponents from "./UserComponents";
import store from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <UserComponents />
      </div>
    </Provider>
  );
}

export default App;
