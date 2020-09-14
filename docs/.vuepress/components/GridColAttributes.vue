<template>
  <div>
    <table>
      <thead>
      <tr>
        <th style="width: 15%;">属性</th>
        <th style="width: 25%;">说明</th>
        <th style="width: 40%;">类型</th>
        <th style="width: 10%;">可选值</th>
        <th style="width: 10%;">默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>span</td>
        <td>栅格占的列数</td>
        <td>Number / String</td>
        <td>——</td>
        <td>——</td>
      </tr>
      <tr>
        <td>offset</td>
        <td>栅格往右偏移的格数</td>
        <td>Number / String</td>
        <td>——</td>
        <td>0</td>
      </tr>
      <tr>
        <td>xs</td>
        <td><=575px 栅格属性对象</td>
        <td>Object (例如： {span: 4, offset: 4})</td>
        <td>——</td>
        <td>——</td>
      </tr>
      <tr>
        <td>sm</td>
        <td>>=576px 栅格属性对象</td>
        <td>Object (例如： {span: 4, offset: 4})</td>
        <td>——</td>
        <td>——</td>
      </tr>
      <tr>
        <td>md</td>
        <td>>=768px 栅格属性对象</td>
        <td>Object (例如： {span: 4, offset: 4})</td>
        <td>——</td>
        <td>——</td>
      </tr>
      <tr>
        <td>lg</td>
        <td>>=992px 栅格属性对象</td>
        <td>Object (例如： {span: 4, offset: 4})</td>
        <td>——</td>
        <td>——</td>
      </tr>
      <tr>
        <td>xl</td>
        <td>>=1200px 栅格属性对象</td>
        <td>Object (例如： {span: 4, offset: 4})</td>
        <td>——</td>
        <td>——</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "GridColAttributes"
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