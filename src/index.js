import React from 'react';
import ReactDom from 'react-dom';
import { ConfigProvider } from 'antd';
import App from "./App";
import zhCN from 'antd/es/locale/zh_CN';
import dva from 'dva';
import 'antd/dist/antd.css';
import './index.less';
// const app = dva();
// app.model(require('./models/try').default);
class Index extends React.Component {
    render () {
        console.log('全局环境的参数 <CONFIG>', CONFIG);
        return (
            <ConfigProvider locale={zhCN}>
                <App />
                {/* { app.router(() => <App />) } */}
            </ConfigProvider>
        )
    }
}
// app.start('#app');
ReactDom.render(<Index />, document.getElementById("app"))