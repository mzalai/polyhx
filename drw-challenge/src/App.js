import logo from './logo.svg';
import './App.css';
import { Layout, Row, Col, Card } from 'antd';
import USMap from './map/Map';
import React from "react";
import ReactEcharts from "echarts-for-react"; 


import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';

const data2 = [
  { text: 'Data', value: 563 },
  { text: 'Scientist', value: 412 },
  { text: 'Engineer', value: 159 },
  { text: 'Senior', value: 124 },
  { text: 'Analyst', value: 99 },
  { text: 'Sr', value: 46 },
  { text: 'Analytics', value: 38 },
  { text: 'Science', value: 35 },
  { text: 'Research', value: 32 },
  { text: 'Associate', value: 31 },
  { text: 'Learning', value: 29 },
  { text: 'Principal', value: 26 },
  { text: 'Machine', value: 25 },
  { text: 'Manager', value: 24 },
  { text: 'Staff', value: 20 },
  { text: 'Lead', value: 20 },
  { text: 'Development', value: 19 },
  { text: 'II', value: 18 },
  { text: '&', value: 17 },
  { text: 'Director', value: 14 },
  { text: 'Lab', value: 13 },
  { text: 'Clinical', value: 12 },
  { text: 'Software', value: 12 },
  { text: 'Intelligence', value: 11 },
  { text: 'Medical', value: 10 },
  { text: 'Analytical', value: 10 },
  { text: 'Marketing', value: 10 },
  { text: 'Laboratory', value: 10 },
  { text: 'R&D', value: 9 },
  { text: 'Consultant', value: 9 },
  { text: 'IT', value: 9 },
  { text: 'Project', value: 8 },
  { text: 'Food', value: 8 },
  { text: 'Engineering', value: 8 },
  { text: 'Oncology', value: 8 },
  { text: 'Systems', value: 8 },
  { text: 'Risk', value: 7 },
  { text: 'Business', value: 7 },
  { text: 'Biologist', value: 7 },
  { text: 'Developer', value: 7 },
  { text: 'Product', value: 7 },
  { text: 'Health', value: 6 },
  { text: 'Digital', value: 6 },
  { text: 'Artificial', value: 6 },
  { text: 'Security', value: 6 },
  { text: 'Contract', value: 6 },
  { text: 'BI', value: 6 },
  { text: 'Platform', value: 6 },
  { text: 'Med', value: 6 },
  { text: 'Tech/Lab', value: 6 },
  { text: 'Immunology', value: 6 },
  { text: 'Scientist-', value: 6 },
  { text: 'Big', value: 6 },
  { text: 'Regulatory', value: 6 },
  { text: 'Quantitative', value: 5 },
  { text: 'Analysis', value: 5 },
  { text: 'Insurance', value: 5 },
  { text: 'Modeler', value: 5 },
  { text: 'Chemistry', value: 5 },
  { text: 'Process', value: 5 },
  { text: 'Safety', value: 5 },
  { text: 'Operations', value: 5 },
  { text: 'Environmental', value: 5 },
  { text: 'Computer', value: 5 }
];

render(<WordCloud
  data={data2}
  width={1000}
  height={750}
  fontSize={(word) => word.value}
  rotate={ ((word) => word.value % 90) - 45}
  padding={2}
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
      text: 'Average Salary and Rating by sector'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      align: 'right'
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
        //barMinWidth: 4
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
              <Col span={14}><Card style={{height: firstRowHeight}}><WordCloud data={data2} /></Card></Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[6, 6]}>
              <Col span={14}><Card style={{height: secondRowHeight}}><USMap /></Card></Col>
              <Col span={10}><Card style={{height: secondRowHeight}}><ReactEcharts option={optionD} /></Card></Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;
