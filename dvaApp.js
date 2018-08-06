import React from 'react'
import dva, {connect} from 'dva-no-router'
import model from './src/models/indexM';
import Router from './mainNavigation';
import UI0101M from "./src/models/UI/UI0101M";
// 1. Initialize
const app = dva({

});

// 2. Model
app.model(model);
app.model(UI0101M);

// 3. Router
app.router(() =><Router/>);

// 4. Start
export default () => {
    return app.start()
}