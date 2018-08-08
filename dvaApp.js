import React from 'react'
import dva, {connect} from 'dva-no-router'
import model from './src/models/loginM';
import Router from './mainNavigation';
import UI0101M from "./src/models/UI/UI0101M";
import HomeM from "./src/models/HomeM";
import consoleM from "./src/models/consoleM";
import UserInfoM from "./src/models/UserInfoM";
// 1. Initialize
const app = dva({

});

// 2. Model
app.model(model);
app.model(UI0101M);
app.model(HomeM);
app.model(consoleM);
app.model(UserInfoM);

// 3. Router
app.router(() =><Router/>);


// 4. Start
export default () => {
    return app.start()
}