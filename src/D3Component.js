import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as d3 from 'd3';

export class D3Component extends Component {
  constructor(props) {
    super(props);
    this.containerSize = 150;
    this.height = 150;
    this.colorScale = d3.scaleLinear()
      .domain([0, d3.max(this.props.data)])
      .range(['#ffeda0', '#feb24c']);
    this.heightScale = d3.scaleLinear().domain([0, d3.max(this.props.data)])
      .range([0, this.height]);
    this.updateChart = (data) => {
      d3.selectAll('.bar')
        .data(data)

      this.bars
        .classed('bar', true)
        .attr('width', 29)
        .attr('x', (d, i) => i * 30)
        .transition()
        .attr('fill', d => this.colorScale(d))
        .attr('y', d => this.height - this.heightScale(d))
        .attr('height', d => this.heightScale(d));


    }
  }

  render() {
    return (
      <div id="d3Chart" />
    );
  }

  componentDidUpdate(prevProps) {
    this.updateChart(this.props.data);
  }

  componentDidMount() {
    this.bars = d3.select('#d3Chart')
      .style('display', 'flex')
      .style('justify-content', 'center')
      .append('svg')
      .attr('width', this.containerSize)
      .attr('height', this.containerSize)
      .selectAll('.bar')
      .data(this.props.data)
      .enter()
      .append('rect');

    this.bars
      .classed('bar', true)
      .attr('width', 29)
      .attr('height', d => this.heightScale(d))
      .attr('fill', d => this.colorScale(d))
      .attr('x', (d, i) => i * 30)
      .attr('y', d => this.height - this.heightScale(d));

  }
}

