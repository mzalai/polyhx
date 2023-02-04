import React from 'react';
import ReactEcharts from 'echarts-for-react'
import logo from './logo.svg';
import './App.css';
import { Layout, Row, Col, Card } from 'antd';

function App() {
  const firstRowHeight = 400;
  const secondRowHeight = 600;
  const option = {
    xAxis: {
      max: 'dataMax'
    },
    yAxis: {
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E'],
      inverse: true,
    },
    series: [
      {
        realtimeSort: true,
        name: 'X',
        type: 'bar',
        data: ['1', '2', '3', '4', '5'],
        label: {
          show: true,
          position: 'right',
          valueAnimation: true
        }
      }
    ],
    legend: {
      show: true
    },
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
  };
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
              <Col span={14}><Card style={{height: secondRowHeight}}>1</Card></Col>
              <Col span={10}><Card style={{height: secondRowHeight}}><ReactEcharts option={option} /></Card></Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;
