<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Press Ctrl+F12 to open Dev tools to check Network.</p>
    <el-button
      type="primary"
      size="small"
      @click="getData"
    >
      Fetch Data
    </el-button>
    <pre>{{ resData }}</pre>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      resData: "",
    };
  },
  mounted() {},
  methods: {
    getData() {
      fetch("http://news.baidu.com/passport")
        .then((res) => {
          return res.json();
        })
        .then((resJson) => {
          this.resData = JSON.stringify(resJson, null, 4);
        });      
    },
  },
};
</script>
<style lang="scss" scoped>
pre {
  text-align: left;
  width: 200px;
  margin: 30px auto;
  font-weight: bold;
}
</style>