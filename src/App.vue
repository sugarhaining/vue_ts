<template>
  <div id="app">
    <router-view />
    <van-tabbar
        active-color="#07c160"
        inactive-color="#000"
        route
    >
        <van-tabbar-item replace to="/" icon="comment">说给Ta</van-tabbar-item>
        <van-tabbar-item replace to="/notice" icon="coupon">提醒Ta</van-tabbar-item>
        <van-tabbar-item replace to="/lover" icon="like">Lover</van-tabbar-item>
        <van-tabbar-item replace to="/daily-push" icon="play-circle">日推</van-tabbar-item>
        <van-tabbar-item replace to="/home" icon="wap-home">爱Ta</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Getter, Mutation} from 'vuex-class';
import {Tabbar, TabbarItem} from 'vant';
import {ACTIVE_TABBAR_INDEX} from './store/action-type';
import {activeIndexType, activeIndexPayload} from './typings/tabbar';

@Component({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
})
export default class App extends Vue {
    @Getter(ACTIVE_TABBAR_INDEX) public active: activeIndexType;
    @Mutation(ACTIVE_TABBAR_INDEX) public activeMutation: (payload: activeIndexPayload) => void;

    get activeIndex(): activeIndexType {
        return this.active;
    }
    set activeIndex(val: activeIndexType) {
        this.activeMutation({
            index: val,
        });
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
