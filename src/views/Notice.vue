<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/icon/logo.png">
    <van-tabbar v-model="tabActiveIndex">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Tabbar, TabbarItem, Sticky } from 'vant';

@Component({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Sticky.name]: Sticky,
  },
})
export default class Home extends Vue {
    private tabActiveIndex: number;

    constructor() {
        super();
        this.tabActiveIndex = 1;
    }
}
</script>
