import logo from './logo.svg';
import './App.css';
import { Layout, Row, Col, Card } from 'antd';
import React from "react";
import ReactEcharts from "echarts-for-react"; 

function App() {
  const firstRowHeight = 400;
  const secondRowHeight = 600;
  

  const toolsData = [
    [392,2,167,176,388]
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
        { name: 'Python', max: 400 },
        { name: 'R', max: 400 },
        { name: 'Spark', max: 400 },
        { name: 'AWS', max: 400 },
        { name: 'Excel', max: 400 },
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

  const optionD = {
    xAxis: {
      max: 'dataMax'
    },
    yAxis: {
      type: 'category',
      data: ['Accounting & Legal', 'Aerospace & Defense', 'Agriculture & Forestry', 'Arts, Entertainment & Recreation', 
            'Biotech & Pharmaceuticals', 'Business Services', 'Construction, Repair & Maintenance', 'Consumer Services', 
            'Education', 'Finance', 'Government', 'Health Care', 'Information Technology', 'Insurance', 'Manufacturing', 
            'Media', 'Mining & Metals', 'Non-Profit', 'Oil, Gas, Energy & Utilities', 'Real Estate', 'Retail', 
            'Telecommunications', 'Transportation & Logistics', 'Travel & Tourism'],
      inverse: true,
    },
    series: [
      {
        name: 'X',
        type: 'bar',
        data: ['4.00', '4.02', '4.60', '3.60', '3.51', '3.87', '3.30', '3.83', '3.13',
               '3.74', '3.29', '3.50', '3.91', '3.54', '3.18', '3.32', '3.97', '3.91', 
               '3.84', '3.90', '3.09', '3.67', '3.84', '3.79'],
        label: {
          show: true,
          position: 'right',
        }
      }
    ],
    legend: {
      show: true
    },
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
              <Col span={10}><Card style={{height: secondRowHeight}}><ReactEcharts option={optionD} /></Card></Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;
