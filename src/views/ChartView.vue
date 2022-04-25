<template>
  <div class="chart">
    <h1>This is a chart page</h1>
    <div id="container" />
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "ChartView",
  myChart: null,
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.myChart = echarts.init(document.getElementById("container"));
      // 绘制图表
      this.myChart.setOption({
        title: {
          text: "ECharts 入门示例",
          left:'center'
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#container {
  width: 700px;
  height: 300px;
  margin: 20px auto;
}
</style>