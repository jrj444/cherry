<template>
  <div>
    <table>
      <thead>
      <tr>
        <th style="width: 15%;">属性</th>
        <th style="width: 25%;">说明</th>
        <th style="width: 25%;">类型</th>
        <th style="width: 25%;">可选值</th>
        <th style="width: 10%;">默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>gutter</td>
        <td>栅格的间隔</td>
        <td>Number / String</td>
        <td>——</td>
        <td>0</td>
      </tr>
      <tr>
        <td>align</td>
        <td>水平排列方式</td>
        <td>String</td>
        <td>left / right / center</td>
        <td>left</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "GridRowAttributes"
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

  & tr {
    width: 100%;
  }

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