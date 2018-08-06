import React from 'react'
import dva, {connect} from 'dva-no-router'
import model from './src/models/indexM';
import Router from './mainNavigation';
// 1. Initialize
const app = dva({

});

// 2. Model
app.model(model);

// 3. Router
app.router(() =><Router/>);

// 4. Start
export default () => {
    return app.start()
}