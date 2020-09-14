<template>
  <div class="block">
    <ch-row>
      <ch-col span="6" offset="6"><div class="grid-content bg-green"></div></ch-col>
      <ch-col span="6" offset="6"><div class="grid-content bg-green"></div></ch-col>
    </ch-row>
    <ch-row>
      <ch-col span="6"><div class="grid-content bg-green"></div></ch-col>
      <ch-col span="6" offset="6"><div class="grid-content bg-green"></div></ch-col>
    </ch-row>
    <ch-row>
      <ch-col span="12" offset="6"><div class="grid-content bg-green"></div></ch-col>
    </ch-row>
  </div>
</template>

<script>
import Row from "../../../src/components/grid/Row";
import Col from "../../../src/components/grid/Col";

export default {
  name: "GridDemo",
  components: {
    "ch-row": Row,
    "ch-col": Col
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

  .ch-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .bg-green {
    background: #b7eb8f;
  }

  .bg-green-light {
    background: #d9f7be;
  }

  .bg-green-dark {
    background: #95de64;
  }

  .grid-content {
    border-radius: 2px;
    min-height: 36px;
  }
}
</style>