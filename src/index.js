import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import HotColdGame from './hotColdGame';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HotColdGame />, document.getElementById(`root`));
registerServiceWorker();
