import logo from './logo.svg';
import './App.css';
import { Layout, Row, Col, Card } from 'antd';
import React from "react";
import ReactEcharts from "echarts-for-react"; 

function App() {
  const firstRowHeight = 400;
  const secondRowHeight = 600;
  

  const toolsData = [
    [392,740,575,566,388]
  ];

  const lineStyle = {
    width: 1,
    opacity: 0.5
  };

  const optionA = {
    backgroundColor: '#161627',
    title: {
      text: 'Tools Used',
      right: 'left',
      textStyle: {
        color: '#eee'
      }
    },
    legend: {
      bottom: 2,
      data: ['Tools'],
      itemGap: 20,
      textStyle: {
        color: '#fff',
        fontSize: 14
      },
      selectedMode: 'single'
    },
    radar: {
      indicator: [
        { name: 'Python', max: 742 },
        { name: 'R', max: 742 },
        { name: 'Spark', max: 742 },
        { name: 'AWS', max: 742 },
        { name: 'Excel', max: 742 },
      ],
      shape: 'circle',
      splitNumber: 5,
      axisName: {
        color: 'rgb(238, 197, 102)'
      },
      splitLine: {
        lineStyle: {
          color: [
            'rgba(238, 197, 102, 0.1)',
            'rgba(238, 197, 102, 0.2)',
            'rgba(238, 197, 102, 0.4)',
            'rgba(238, 197, 102, 0.6)',
            'rgba(238, 197, 102, 0.8)',
            'rgba(238, 197, 102, 1)'
          ].reverse()
        }
      },
      splitArea: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(238, 197, 102, 0.5)'
        }
      }
    },
    series: [
      {
        name: 'Tools',
        type: 'radar',
        lineStyle: lineStyle,
        data: toolsData,
        symbol: 'none',
        itemStyle: {
          color: '#F9713C'
        },
        areaStyle: {
          opacity: 0.1
        }
      }
    ]
  };

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
              <Col span={10}><Card style={{height: firstRowHeight}}> <ReactEcharts option={optionA} />;</Card></Col>
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
