const liuxing = require('./static/img/liuxing.png').default;
import boom from './static/img/boom.svg';
import { Steps } from 'antd';

const { Step } = Steps;

export const Init = () => {
    return (
        <React.Fragment>
            <h1 className={'test'}>定时炸s弹</h1>
            <Steps direction="vertical" current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>z
            <img src={boom} alt="" />
            <img src={liuxing} alt="" />
        </React.Fragment>
    )
}
