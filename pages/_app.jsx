import React from 'react';

import reducer, { initialState } from '../context/reducer';
import { StateProvider } from '../context/StateProvider';

import '../styles.sass';

function App({ Component, pageProps }) {

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </StateProvider>
  )
}

export default App;
