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
        <td>type</td>
        <td>类型</td>
        <td>String</td>
        <td>primary / success / warning / dangerous / text / link</td>
        <td>default</td>
      </tr>
      <tr>
        <td>size</td>
        <td>大小</td>
        <td>String</td>
        <td>large / normal / small</td>
        <td>normal</td>
      </tr>
      <tr>
        <td>circle</td>
        <td>是否圆形按钮</td>
        <td>Boolean</td>
        <td>——</td>
        <td>false</td>
      </tr>
      <tr>
        <td>loading</td>
        <td>是否加载中</td>
        <td>Boolean</td>
        <td>——</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>Boolean</td>
        <td>——</td>
        <td>false</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>图标名字</td>
        <td>String</td>
        <td>——</td>
        <td>——</td>
      </tr>
      <tr>
        <td>icon-position</td>
        <td>图标位置</td>
        <td>String</td>
        <td>left / right</td>
        <td>left</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ButtonAttributesDemo"
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