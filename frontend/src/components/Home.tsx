import React from "react";
import { Card, Button, DatePicker, DatePickerProps, Row, Col} from 'antd';
import Hello from './Hello';
import Goodbye from './Goodbye';
import flower from '../assets/flower1.jpg';
import flower2 from '../assets/flower2.jpg';
import flower3 from '../assets/flower3.jpg';

const Home = () => {
    let counter = 0
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
     console.log(date, dateString);
    };
    const onClick = (event: any) => {
     console.log(counter++)
    }
    return (<>
        <Hello name="API"/>
        <Row justify="space-around">
        <Col span={6}>
        <Card title="Flower" style={{ width: 400, height: 300 }}>
            <img src={flower} width={300} height={200}></img>
            <p>This is flower</p>
        </Card>
        </Col>
        <Col span={6}>
        <Card title="Flower 2" style={{ width: 400, height: 300 }}>
            <img src={flower2} width={300} height={200}></img>
            <p>This is flower 2</p>
        </Card>
        </Col>
        <Col span={6}>
        <Card title="Flower 3" style={{ width: 400, height: 300 }}>
            <img src={flower3} width={300} height={200}></img>
            <p>This is flower 3</p>
        </Card>
        </Col>
        </Row>
        <Button type="primary" onClick={onClick}>Button</Button>
        <Button type="primary" danger>Button</Button>
        <DatePicker onChange={onChange} />
        <Goodbye name="User"/>
    </>);
    
}
export default Home;