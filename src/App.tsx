import React from 'react';
import StateButtonHook from './components/StateButtonHook';
import AusgabeStore from './components/AusgabeStore';

import Store from './store/Store';

function App() {
  return (
    <div>
      <Store>
        <StateButtonHook titleName="React Demo Hook"></StateButtonHook>
        <AusgabeStore></AusgabeStore>
      </Store>
    </div>
  );
}

export default App;
