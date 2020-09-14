<template>
  <div class="block">
    <ch-collapse>
      <ch-collapse-item title="曼联">
        <div>曼彻斯特联足球俱乐部(Manchester United Football Club)，成立于1902年</div>
        <div>中文简称“曼联”，英文简称“Man Utd”或“MUFC”</div>
      </ch-collapse-item>
      <ch-collapse-item title="利物浦">
        <div>利物浦足球俱乐部（Liverpool F.C.，简称利物浦），于1892年成立</div>
        <div>位于英格兰西北部默西赛德郡港口城市利物浦</div>
      </ch-collapse-item>
      <ch-collapse-item title="切尔西">
        <div>切尔西足球俱乐部（Chelsea F.C.，简称切尔西）</div>
        <div>绰号蓝军，为欧洲大满贯球队</div>
      </ch-collapse-item>
      <ch-collapse-item title="阿森纳">
        <div>阿森纳足球俱乐部（Arsenal F.C.，简称阿森纳），位于英国首都伦敦西北部</div>
        <div>成立于1886年，俱乐部基地位于伦敦荷洛（Holloway）</div>
      </ch-collapse-item>
    </ch-collapse>
  </div>
</template>

<script>
import Collapse from "../../../src/components/collapse/Collapse";
import CollapseItem from "../../../src/components/collapse/CollapseItem";

export default {
  name: "CollapseDemo",
  components: {
    "ch-collapse": Collapse,
    "ch-collapse-item": CollapseItem
  }
};
</script>

<style lang="scss" scoped>
.block {
  border: 1px solid #eaecef;
  border-radius: 3px;
  padding: 24px;
  transition: all .3s;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>