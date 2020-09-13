<template>
  <div>
    <ul class="icon-list">
      <li>
        <ch-icon name="message"></ch-icon>
        <span>message</span>
      </li>
      <li>
        <ch-icon name="search"></ch-icon>
        <span>search</span>
      </li>
      <li>
        <ch-icon name="edit"></ch-icon>
        <span>edit</span>
      </li>
      <li>
        <ch-icon name="link"></ch-icon>
        <span>link</span>
      </li>
      <li>
        <ch-icon name="share"></ch-icon>
        <span>share</span>
      </li>
      <li>
        <ch-icon name="upload"></ch-icon>
        <span>upload</span>
      </li>
      <li>
        <ch-icon name="download"></ch-icon>
        <span>download</span>
      </li>
      <li>
        <ch-icon name="region"></ch-icon>
        <span>region</span>
      </li>
      <li>
        <ch-icon name="lock"></ch-icon>
        <span>lock</span>
      </li>
      <li>
        <ch-icon name="unlock"></ch-icon>
        <span>unlock</span>
      </li>
      <li>
        <ch-icon name="image"></ch-icon>
        <span>image</span>
      </li>
      <li>
        <ch-icon name="email"></ch-icon>
        <span>email</span>
      </li>
      <li>
        <ch-icon name="user"></ch-icon>
        <span>user</span>
      </li>
      <li>
        <ch-icon name="list"></ch-icon>
        <span>list</span>
      </li>
      <li>
        <ch-icon name="refresh"></ch-icon>
        <span>refresh</span>
      </li>
      <li>
        <ch-icon name="help"></ch-icon>
        <span>help</span>
      </li>
      <li>
        <ch-icon name="github"></ch-icon>
        <span>github</span>
      </li>
      <li>
        <ch-icon name="view"></ch-icon>
        <span>view</span>
      </li>
      <li>
        <ch-icon name="view_off"></ch-icon>
        <span>view_off</span>
      </li>
      <li>
        <ch-icon name="error"></ch-icon>
        <span>error</span>
      </li>
      <li>
        <ch-icon name="info"></ch-icon>
        <span>info</span>
      </li>
      <li>
        <ch-icon name="loading"></ch-icon>
        <span>loading</span>
      </li>
      <li>
        <ch-icon name="setting"></ch-icon>
        <span>setting</span>
      </li>
      <li>
        <ch-icon name="up"></ch-icon>
        <span>up</span>
      </li>
      <li>
        <ch-icon name="down"></ch-icon>
        <span>down</span>
      </li>
      <li>
        <ch-icon name="left"></ch-icon>
        <span>left</span>
      </li>
      <li>
        <ch-icon name="right"></ch-icon>
        <span>right</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "../../../src/components/Icon";

export default {
  name: "IconSet",
  components: {
    "ch-icon": Icon
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.icon-list {
  list-style: none;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > li {
    width: 20%;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #666;

    > svg {
      width: 32px;
      height: 32px;
      margin-bottom: 15px;
      transition: all .15s linear;
    }

    &:hover {
      background: #1890ff;
      color: #fff;
    }

    > span {
      transition: all .15s linear;
    }
  }
}
</style>