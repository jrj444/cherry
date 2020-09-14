<template>
  <div class="block">
    <ch-collapse single>
      <ch-collapse-item title="诸葛亮">
        <div>诸葛亮（181年~234年10月8日），字孔明，号卧龙</div>
        <div>三国时期蜀汉丞相，中国古代杰出的政治家、军事家、文学家</div>
      </ch-collapse-item>
      <ch-collapse-item title="曹操">
        <div>魏武帝曹操（155~220年），本名吉利，字孟德，小名阿瞒，沛国谯县人</div>
        <div>中国古代杰出的政治家、军事家、文学家、书法家</div>
      </ch-collapse-item>
      <ch-collapse-item title="周瑜">
        <div>周瑜（175年-210年），字公瑾，庐江舒人 </div>
        <div>东汉末年名将，长壮有姿貌、精音律，江东有“曲有误，周郎顾”之语</div>
      </ch-collapse-item>
      <ch-collapse-item title="司马懿">
        <div>司马懿（179年—251年9月7日），字仲达，河内郡温县孝敬里人</div>
        <div>中国古代杰出的政治家、军事家、文学家，西晋王朝的奠基人之一</div>
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