import './App.css'
import { Card, Button, DatePicker, DatePickerProps } from 'antd';
import 'antd/dist/reset.css';
import './components/Hello'
import Hello from './components/Hello';
import Goodbye from './components/Goodbye';
import flower from './assets/flower1.jpg';
import flower2 from './assets/flower2.jpg';

let counter = 0
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
 console.log(date, dateString);
};
const onClick = (event: any) => {
 console.log(counter++)
}

function App() {

  return (
    <>
      <Hello name="API"/>
      <div >
        <Card title="Flower" style={{ width: 500, height: 300 }}>
          <img src={flower} width={300} height={200}></img>
          <p>This is flower</p>
        </Card>
        <Card title="Flower 2" style={{ width: 500, height: 300 }}>
          <img src={flower2} width={300} height={200}></img>
          <p>This is flower 2</p>
        </Card>

        <br/>

        <Button type="primary" onClick={onClick}>Button</Button>
        <Button type="primary" danger>Button</Button>

        <br/>
        <DatePicker onChange={onChange} />
      </div>
      <Goodbye name="User"/>
    </>
  )
}

export default App
