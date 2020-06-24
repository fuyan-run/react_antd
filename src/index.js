import ReactDom from 'react-dom';
import { ConfigProvider } from 'antd';
import App from "./App";
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import './index.less';
class Index extends React.Component {
    render(){
        return (
            <ConfigProvider locale={zhCN}>
                <App />
            </ConfigProvider>
        )
    }
}
ReactDom.render(<Index />, document.getElementById("app"))