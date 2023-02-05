import logo from './logo.svg';
import './App.css';
import { Layout, Row, Col, Card } from 'antd';
import USMap from './map/Map';

function App() {
  const firstRowHeight = 400;
  const secondRowHeight = 600;
  return (
    <div className="App">
      <Layout className="layout">
        <Row gutter={[6, 6]}>
          <Col span={24}>
            <Row gutter={[6, 6]}>
              <Col span={10}><Card style={{height: firstRowHeight}}>1</Card></Col>
              <Col span={14}><Card style={{height: firstRowHeight}}>1</Card></Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[6, 6]}>
              <Col span={14}><Card style={{height: secondRowHeight}}><USMap /></Card></Col>
              <Col span={10}><Card style={{height: secondRowHeight}}>1</Card></Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;
