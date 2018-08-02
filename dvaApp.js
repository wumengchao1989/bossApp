import React from 'react'
import dva, {connect} from 'dva-no-router'
import App from './src/components/App';
import model from './src/models/indexM';
// 1. Initialize
const app = dva({
    onError(e, dispatch) {
        console.log('e', e)
    }
});

// 2. Model
app.model(model);

// 3. Router
app.router(() => <App/>);

// 4. Start
export default () => {
    return app.start()
}