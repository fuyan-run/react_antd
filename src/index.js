import ReactDom from 'react-dom';
import { ConfigProvider } from 'antd';
import { Init } from "./Init";
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import './index.less';
class App extends React.Component {
    render(){
        return (
            <ConfigProvider locale={zhCN}>
                <Init />
            </ConfigProvider>
        )
    }
}
ReactDom.render(<App />, document.getElementById("app"))