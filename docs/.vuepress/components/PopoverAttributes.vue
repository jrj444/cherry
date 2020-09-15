<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>trigger</td>
        <td>触发方式</td>
        <td>String</td>
        <td>click / hover</td>
        <td>click</td>
      </tr>
      <tr>
        <td>position</td>
        <td>出现位置</td>
        <td>String</td>
        <td>top/ bottom / left / right</td>
        <td>top</td>
      </tr>
      <tr>
        <td>slot</td>
        <td>弹出内容</td>
        <td>——</td>
        <td>具名 slot="content"</td>
        <td>——</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PopoverAttributes"
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
    width: 25%;
  }

  & td {
    color: #606266;
  }
}
</style>