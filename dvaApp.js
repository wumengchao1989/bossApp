import React from 'react'
import dva, { connect } from 'dva-no-router'
import App from './App';
import model from './model';
// 1. Initialize
const app = dva();

// 2. Model
app.model(model);

// 3. Router
app.router(() => <App />);

// 4. Start
export default () => {
    return app.start()
}