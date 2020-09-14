<template>
  <table>
    <thead>
    <tr>
      <th style="width: 20%;">属性</th>
      <th style="width: 40%;">说明</th>
      <th style="width: 25%;">类型</th>
      <th style="width: 15%;">可选值</th>
      <th style="width: 15%;">默认值</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>title</td>
      <td>面板标题(CollapseItem属性)</td>
      <td>String</td>
      <td>——</td>
      <td>——</td>
    </tr>
    <tr>
      <td>single</td>
      <td>手风琴效果(Collapse属性)</td>
      <td>Boolean</td>
      <td>——</td>
      <td>false</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "CollapseAttributes"
};
</script>

<style lang="scss" scoped>
table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
}

table {
  background: #fff;
  line-height: 1.5em;
  font-size: 14px;
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;

  & th {
    text-align: left;
    white-space: nowrap;
    color: #909399;
    font-weight: 400;
  }

  & th, td {
    border-bottom: 1px solid #eaecef;
    padding: 15px;
  }

  & td {
    color: #606266;
  }
}
</style>