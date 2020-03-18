import { AsyncStorage } from 'react-native';
import { reactotronRedux } from 'reactotron-redux';
import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure()
  .use(reactotronRedux())
  .useReactNative()
  .connect();

console.tron = Reactotron;

export default reactotron;
