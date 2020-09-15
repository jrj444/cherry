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
        <td>message</td>
        <td>消息内容</td>
        <td>String</td>
        <td>——</td>
        <td>——</td>
      </tr>
      <tr>
        <td>duration</td>
        <td>显示时间，毫秒</td>
        <td>Number</td>
        <td>——</td>
        <td>3000</td>
      </tr>
      <tr>
        <td>showClose</td>
        <td>关闭按钮</td>
        <td>Objet</td>
        <td>可以设置文本和回调函数</td>
        <td>{text:'ok',callback:()=>{}}</td>
      </tr>
      <tr>
        <td>position</td>
        <td>弹出位置</td>
        <td>String</td>
        <td>top / middle / bottom</td>
        <td>top</td>
      </tr>
      <tr>
        <td>useHtml</td>
        <td>是否使用HTML</td>
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
  name: "ToastAttributes"
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