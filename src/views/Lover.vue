<template>
  <div class="lover">
        <div class="count">
            <ICountUp
                v-for="(i, index) in boardNum"
                :key="index"
                :delay="delay + index * 200"
                :endVal="+i"
                :options="options"
            />
        </div>
        <img
            v-for="(i, index) in imageSource"
            :key="i"
            :src="i"
            :class="[`float-icon-${index}`]"
            :style="animationGenerate(index)"
        />
        <img src="../assets/icon/lover.png" class="embrace position-1">
        <img src="../assets/icon/lover.png" class="embrace position-2">
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import ICountUp from 'vue-countup-v2';
import {CountOptions} from '../typings/lover';

@Component({
    components: {
        ICountUp,
    },
})

export default class App extends Vue {
    public delay: number = 500;
    public options: CountOptions = {
        useEasing: true,
    };
    public imageSource: string[] = [
        require('../assets/icon/rabbit-2x.png'),
        require('../assets/icon/rabbit-blue.png'),
        require('../assets/icon/rabbit-car.png'),
        require('../assets/icon/rabbit-eye.png'),
        require('../assets/icon/rabbit-green.png'),
        require('../assets/icon/rabbit-moon.png'),
    ];

    get endVal(): number {
        const startStamp: number = new Date(2019, 3, 21).getTime();
        const currStamp: number = new Date().getTime();
        const intervalDay: number = Math.floor((currStamp - startStamp) / (60 * 60 * 24 * 1000)) - 1;

        return intervalDay;
    }
    get boardNum(): string[] {
        return this.endVal.toString().split('');
    }
    public animationGenerate(i: number): {top: string, left: string} {
        const lucky = Math.random();

        return {
            left: `${20 + 8 * lucky * i}vw`,
            top: `${30 * lucky}vh`,
        };
    }
}

</script>

<style lang='scss' scoped>
.lover {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('../assets/icon/embrace.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.count {
    width: 70vw;
    height: 200px;
    margin-top: 80px;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 200px 200px 200px;
    grid-column-gap: 5%;
    justify-items: center;
    align-items: center;
    
    > span {
        display: block;
        width: 90%;
        height: 200px;
        line-height: 200px;
        font-size: 50px;
        color: #686868;
        border-radius: 10px;
        box-shadow: 0 0 5px 2px #ccc;
    }
}
@for $i from 0 through 5 {
    .float-icon-#{$i} {
        width: 40px;
        height: 40px;
        position: fixed;
        opacity: 0.4;
        /* animation: rain-down-#{$i} ease 2s infinite; */
    }

    @keyframes rain-down-#{$i} {
        0% {
            transform: rotateX(0);
        }
        25% {
            transform: rotateX(40deg);
        }
        50% {
            transform: rotateX();
        }
        75% {
            transform: rotateX(-40deg);
        }
        100% {
            transform: rotateX(0);
        }
    }
}

.embrace {
    width: 80px;
    height: 80px;
    position: fixed;
    right: 10vw;
    animation: lover-jump ease 3s infinite;
}

.position-1 {
    top: 50vh;
}

.position-2 {
    width: 40px;
    height: 40px;
    top: 56vh;
}

@keyframes lover-jump {
    0% {
        transform: scale(0.6);
        opacity: .4;
    }
    25% {
        transform: scale(0.8);
        opacity: .6;
    }
    50% {
        transform: scale(0.4);
        opacity: .3;
    }
    75% {
        transform: scale(1.0);
        opacity: .7;
    }
    100% {
        transform: scale(0.6);
        opacity: .4;
    }
}
</style>8