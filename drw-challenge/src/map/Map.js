import * as React from 'react';
import * as d3 from 'd3';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import { FloatButton } from 'antd';
import { NumberOutlined, DollarCircleOutlined, StarOutlined } from '@ant-design/icons';
import 'leaflet/dist/leaflet.css';
import  features  from '../assets/us_with_values.json';


class USMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "jobs",
      style: (feature) => {
        return ({
          fillColor: this.getScale("jobs")(feature.properties["jobs"]),
          weight: 1,
          opacity: 1,
          color: 'white',
          dashArray: '2',
          fillOpacity: 0.5
        });
      }
    }
    this.position = [37.0902, -95.7129];
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.setState({id: e.currentTarget.id}, () => {
      this.setState({
        style: (feature) => {
          return ({
            fillColor: this.getScale(this.state.id)(feature.properties[this.state.id]),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '2',
            fillOpacity: 0.5
          });
        }
      })
    })
  }

  getScale(property) {
    return d3.scaleQuantile()
      .domain(d3.extent(features.features.map(x => x.properties[property])))
      .range(d3.schemePuRd[7]);
  }


  render() {
    return (
      <div style={{ height: '100%' }}>
        <FloatButton.Group
          shape="square"
          style={{
            left: 95,
            zIndex: 1000,
            position: "absolute"
          }}
        >
          <FloatButton id="jobs" icon={<NumberOutlined />} tooltip="JOBS" onClick={this.onClick} />
          <FloatButton id="salary" icon={<DollarCircleOutlined />} tooltip="SALARY" onClick={this.onClick} />
          <FloatButton id="rating" icon={<StarOutlined />} tooltip="RATING" onClick={this.onClick} />
        </FloatButton.Group>
        <MapContainer style={{ height: 600-24-24, width: '100%' }} center={this.position} zoom={4} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
           <GeoJSON data={features.features} style={this.state.style} />
        </MapContainer>
      </div>
    );
  }
}

export default USMap;