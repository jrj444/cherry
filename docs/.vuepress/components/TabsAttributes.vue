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
        <td>selected</td>
        <td>要显示的标签名</td>
        <td>String</td>
        <td>必填</td>
        <td>——</td>
      </tr>
      <tr>
        <td>name</td>
        <td>与 selected 对应的 tab-item 和 tab-pane 的标签名</td>
        <td>String</td>
        <td>必填</td>
        <td>——</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用 tab-item</td>
        <td>Boolean</td>
        <td>——</td>
        <td>false</td>
      </tr>
      <tr>
        <td>actions</td>
        <td>具名的 slot 插槽</td>
        <td>——</td>
        <td>——</td>
        <td>——</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TabsAttributes"
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