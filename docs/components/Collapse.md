---
title: Collapse - 折叠面板
---

# Collapse 折叠面板

可以折叠/展开的内容区域

### 基础用法

可同时展开多个面板，面板之间互不影响

<ClientOnly><CollapseDemo></CollapseDemo></ClientOnly>

通过 `title` 来设置每个面板的标题

```vue
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
```

### 手风琴效果

每次只能展开一个面板

<ClientOnly><CollapseSingle></CollapseSingle></ClientOnly>

通过 `single` 属性来设置是否以手风琴模式显示

```vue
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
```

### 属性

<CollapseAttributes></CollapseAttributes>