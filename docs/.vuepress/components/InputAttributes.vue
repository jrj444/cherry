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
        <td>value / v-model</td>
        <td>绑定值</td>
        <td>String</td>
        <td>——</td>
        <td>——</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>占位文本</td>
        <td>String</td>
        <td>——</td>
        <td>——</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>禁用</td>
        <td>Boolean</td>
        <td>——</td>
        <td>false</td>
      </tr>
      <tr>
        <td>readonly</td>
        <td>只读</td>
        <td>Boolean</td>
        <td>——</td>
        <td>false</td>
      </tr>
      <tr>
        <td>show-password</td>
        <td>显示切换密码</td>
        <td>Boolean</td>
        <td>——</td>
        <td>false</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "InputAttributes"
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