"use client";

import React, { useLayoutEffect, useState, useRef } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { initialData, NodeDataItem } from './initialData';

am4core.useTheme(am4themes_animated);

function Chart() {
  const [jsonData, setJsonData] = useState(JSON.stringify(initialData, null, 2));
  const [centerStrength, setCenterStrength] = useState(1.7);
  const [manyBodyStrength, setManyBodyStrength] = useState(-20);
  const [linkWithStrength, setLinkWithStrength] = useState(1.5);
  const [chartData, setChartData] = useState<NodeDataItem[]>(initialData);
  const [radioValue, setRadioValue] = useState("betweennessCentralityValue");
  const [chartWidth, setChartWidth] = useState(800);
  const [chartHeight, setChartHeight] = useState(600);
  const chartRef = useRef<am4plugins_forceDirected.ForceDirectedTree | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useLayoutEffect(() => {
    if (chartRef.current) {
      chartRef.current.dispose();
    }

    const chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
    const series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());

    series.data = chartData;

    series.dataFields.value = radioValue;
    series.dataFields.name = "name";
    series.dataFields.id = "name";
    series.dataFields.linkWith = "link";
    series.dataFields.children = "children";

    const valueFieldName = radioValue === "frequencyValue" ? "出現頻度" : "媒介中心性";
    series.nodes.template.tooltipText = 
      `${valueFieldName}: [bold]{${radioValue}}[/]\nコミュニティ:[bold]{community}[/]`;
    series.nodes.template.label.text = "{name}";
    series.nodes.template.label.fill = am4core.color("#000000");
    series.fontSize = 15;
    series.minRadius = 15;
    series.maxRadius = 45;

    series.links.template.strokeWidth = 2;
    series.links.template.strokeOpacity = 1;
    series.links.template.distance = 1.5;

    series.links.template.adapter.add("strokeWidth", function(width, target) {
      const from = target.source;
      const to = target.target;
      if (from && to && from.dataItem && to.dataItem) {
        const fromContext = from.dataItem.dataContext as NodeDataItem;
        const toContext = to.dataItem.dataContext as NodeDataItem;
        if (fromContext.linkWidths && fromContext.linkWidths[toContext.name]) {
          return fromContext.linkWidths[toContext.name] + 0.5;
        }
      }
      return width;
    });
  
    series.links.template.adapter.add("tooltipText", function(text, target) {
      const from = target.source;
      const to = target.target;
      if (from && to && from.dataItem && to.dataItem) {
        const fromContext = from.dataItem.dataContext as NodeDataItem;
        const toContext = to.dataItem.dataContext as NodeDataItem;
        if (fromContext.linkData && fromContext.linkData[toContext.name]) {
          const linkData = fromContext.linkData[toContext.name];
          return `共起の程度:[bold]${linkData}[/]`;
        }
      }
      return text;
    });

    series.centerStrength = centerStrength;
    series.manyBodyStrength = manyBodyStrength;
    series.links.template.strength = linkWithStrength;

    chartRef.current = chart;

    return () => {
      chart.dispose();
    };
  }, [chartData, centerStrength, manyBodyStrength, linkWithStrength, radioValue, chartWidth, chartHeight]);

  const handleApply = () => {
    try {
      const newData = JSON.parse(jsonData);
      setChartData(newData);
      setErrorMessage(null); // エラーがない場合、エラーメッセージをクリア
    } catch (error) {
      console.error("Invalid JSON data", error);
      setErrorMessage("Invalid JSON data: " + (error instanceof Error ? error.message : String(error)));
    }
  };

  return (
    <div className="flex">
      <div className="w-2/3 p-6">
        <h2 className="text-2xl font-bold mb-4">Chart</h2>
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline"> {errorMessage}</span>
          </div>
        )}
        <div id="chartdiv" style={{ width: `${chartWidth}px`, height: `${chartHeight}px` }}/>
      </div>
      <div className="w-1/3 p-6">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">JSON Data</label>
            <textarea
              value={jsonData}
              onChange={(e) => setJsonData(e.target.value)}
              rows={10}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="JSON dataを入力してください"
            />
          </div>
          <button
            onClick={handleApply}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            表示
          </button>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">中心力</label>
            <input
              type="number"
              value={centerStrength}
              onChange={(e) => setCenterStrength(Number(e.target.value))}
              step={0.1}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">反発力</label>
            <input
              type="number"
              value={manyBodyStrength}
              onChange={(e) => setManyBodyStrength(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">リンク強度</label>
            <input
              type="number"
              value={linkWithStrength}
              onChange={(e) => setLinkWithStrength(Number(e.target.value))}
              step={0.1}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">参照値</label>
            <select
              value={radioValue}
              onChange={(e) => setRadioValue(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="frequencyValue">出現頻度: frequencyValue</option>
              <option value="betweennessCentralityValue">媒介中心性: betweennessCentralityValue</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">チャートの幅 (px)</label>
            <input
              type="number"
              value={chartWidth}
              onChange={(e) => setChartWidth(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">チャートの高さ (px)</label>
            <input
              type="number"
              value={chartHeight}
              onChange={(e) => setChartHeight(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;