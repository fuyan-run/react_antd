import React from 'react';
import ReactDom from 'react-dom';
import { ConfigProvider } from 'antd';
import App from "./App";
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import './index.less';

class Index extends React.Component {
    render () {
        console.log('全局环境的参数 <CONFIG>', CONFIG);
        return (
            <ConfigProvider locale={zhCN}>
                <App />
            </ConfigProvider>
        )
    }
}
ReactDom.render(<Index />, document.getElementById("app"))