import React, {FC} from 'react';
import store from './Redux/store';
import {Provider} from 'react-redux';
import NavigationRender from './Navigation';

const App: FC = () => {
  return (
    <Provider store={store}>
      <NavigationRender />
    </Provider>
  );
};
export default App;
