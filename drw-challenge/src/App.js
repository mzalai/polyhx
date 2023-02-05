import logo from './logo.svg';
import './App.css';
import { Layout, Row, Col, Card } from 'antd';
import USMap from './map/Map';
import React from "react";
import ReactEcharts from "echarts-for-react"; 


import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';

const data2 = [
  { text: 'Data', value: 5630 },
  { text: 'Scientist', value: 4120 },
  { text: 'Engineer', value: 1590 },
  { text: 'Senior', value: 1240 },
  { text: 'Analyst', value: 990 },
  { text: 'Sr', value: 460 },
  { text: 'Analytics', value: 380 },
  { text: 'Science', value: 350 },
  { text: 'Research', value: 320 },
  { text: 'Associate', value: 310 },
  { text: 'Learning', value: 290 },
  { text: 'Principal', value: 260 },
  { text: 'Machine', value: 250 },
  { text: 'Manager', value: 240 },
  { text: 'Staff', value: 200 },
  { text: 'Lead', value: 200 },
  { text: 'Development', value: 190 },
  { text: 'II', value: 180 },
  { text: '&', value: 170 },
  { text: 'Director', value: 140 },
  { text: 'Lab', value: 130 },
  { text: 'Clinical', value: 120 },
  { text: 'Software', value: 120 },
  { text: 'Intelligence', value: 110 },
  { text: 'Medical', value: 100 },
  { text: 'Analytical', value: 100 },
  { text: 'Marketing', value: 100 },
  { text: 'Laboratory', value: 100 },
  { text: 'R&D', value: 90 },
  { text: 'Consultant', value: 90 },
  { text: 'IT', value: 90 },
  { text: 'Project', value: 80 },
  { text: 'Food', value: 80 },
  { text: 'Engineering', value: 80 },
  { text: 'Oncology', value: 80 },
  { text: 'Systems', value: 80 },
  { text: 'Risk', value: 70 },
  { text: 'Business', value: 70 },
  { text: 'Biologist', value: 70 },
  { text: 'Developer', value: 70 },
  { text: 'Product', value: 70 },
  { text: 'Health', value: 60 },
  { text: 'Digital', value: 60 },
  { text: 'Artificial', value: 60 },
  { text: 'Security', value: 60 },
  { text: 'Contract', value: 60 },
  { text: 'BI', value: 60 },
  { text: 'Platform', value: 60 },
  { text: 'Med', value: 60 },
  { text: 'Tech/Lab', value: 60 },
  { text: 'Immunology', value: 60 },
  { text: 'Scientist-', value: 60 },
  { text: 'Big', value: 60 },
  { text: 'Regulatory', value: 60 },
  { text: 'Quantitative', value: 50 },
  { text: 'Analysis', value: 50 },
  { text: 'Insurance', value: 50 },
  { text: 'Modeler', value: 50 },
  { text: 'Chemistry', value: 50 },
  { text: 'Process', value: 50 },
  { text: 'Safety', value: 50 },
  { text: 'Operations', value: 50 },
  { text: 'Environmental', value: 50 },
  { text: 'Computer', value: 50 }
];

render(<WordCloud
  data={data2}
  width={800}
  height={600}
  options={{
    rotations: 2,
    rotationAngles: [-90, 0],
  }}
  //rotate={ ((word) => word.value % 90) - 45}
  onWordClick={(event, d) => {
    console.log(`onWordClick: ${d.text}`);
  }}
  onWordMouseOver={(event, d) => {
    console.log(`onWordMouseOver: ${d.text}`);
  }}
  onWordMouseOut={(event, d) => {
    console.log(`onWordMouseOut: ${d.text}`);
  }}
/>, document.getElementById('root'));


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
    title: {
      text: 'Avg Salary and Rating by Sector'
    },
    grid: {
      left: -45,
      right: 105,
      top: 55,
      bottom: 0,
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    height: 450,
    legend: {
      right:'25'
    },
    xAxis: [
      {
        type: 'value',
        name: 'Avg Rating',
        min: 0,
        max: 5,
        position: 'top',
        axisLabel: {
          formatter: '{value}/5'
        }
      },
      {
        type: 'value',
        name: 'Avg Salary',
        min: 0,
        max: 120,
        position: 'bottom',
        axisLabel: {
          formatter: '$ {value}k'
        }
      }
    ],
    yAxis: {
      type: 'category',
      data: ['Agriculture & Forestry', 'Aerospace & Defense', 'Accounting & Legal', 
      'Mining & Metals', 'Non-Profit', 'Information Technology', 'Real Estate', 
      'Business Services', 'Oil, Gas, Energy & Utilities', 'Transportation & Logistics', 
      'Consumer Services', 'Travel & Tourism', 'Finance', 'Telecommunications', 
      'Arts, Entertainment & Recreation', 'Insurance', 'Biotech & Pharmaceuticals', 
      'Health Care', 'Media', 'Construction, Repair & Maintenance', 'Government', 
      'Manufacturing', 'Education', 'Retail'],
      inverse: true,
    },
    series: [
      {
        name: 'Rating',
        type: 'bar',
        data: ['4.60', '4.02', '4.00', '3.97', '3.91', '3.91', '3.90', '3.87', 
              '3.84', '3.84', '3.83', '3.79', '3.74', '3.67', '3.60', '3.54', 
              '3.51', '3.50', '3.32', '3.30', '3.29', '3.18', '3.13', '3.09'],
        
      },
      {
        name: 'Salary',
        type: 'bar',
        data: ['80.50', '99.06', '113.50', '104.00', '68.61', '113.19', '104.75', 
              '97.70', '80.46', '99.31', '99.88', '69.50', '97.37', '102.33', '48.50', 
              '105.94', '111.77', '67.62', '116.67', '26.50', '78.55', '84.04', '100.74', '99.67'],
        xAxisIndex:1
      }
    ],

  };
  
  return (
    <div className="App">
      <Layout className="layout">
        <Row gutter={[6, 6]}>
          <Col span={24}>
            <Row gutter={[6, 6]}>
              <Col span={10}><Card style={{height: firstRowHeight}}><ReactEcharts option={optionA} /></Card></Col>
              <Col span={14}><Card style={{height: firstRowHeight}}><WordCloud data={data2} style={{height: secondRowHeight, width: 500}}/></Card></Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[6, 6]}>
              <Col span={14}><Card style={{height: secondRowHeight}}><USMap /></Card></Col>
              <Col span={10}><Card style={{height: secondRowHeight}}><ReactEcharts option={optionD} style={{height: secondRowHeight, width: 500}} /></Card></Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;
