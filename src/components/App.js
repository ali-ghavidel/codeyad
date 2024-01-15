import store from "../redux/store";
import MyStore from "./MyStore";
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <div>
      <MyStore />
    </div>
    </Provider>
  );
}

export default App;
