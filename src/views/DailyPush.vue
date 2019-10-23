<template>
  <div class="about">
    <!-- <img
        v-for="index in 5"
        src="../assets/icon/coin.png"
        :class='["gold-coin", shouldCoinMove ? `gold-coin-${index}` : ""]'
        :key="index"
    /> -->
    <div class="swiper-image">
        <swiper :options="swiperOptionImage">
            <swiper-slide>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKgJpSPqPTXUF3Ku8nc19-4SQztXZYEityfVl2xFvj3RUCxCtSQ&s">
            </swiper-slide>
            <swiper-slide>
                <img src="https://up.enterdesk.com/edpic_source/b1/89/62/b189627045b6000b093aad2a0d1859d6.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8ErUtrHf9wjDRDrT0dQp7UmN8QkhDIjVJ-Wqmr0taJ0hO6_Cfw&s">
            </swiper-slide>
            <swiper-slide>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3InMtSYszH1WNOHhkdVFwyxcS4hBSpWflYTS-9j6izt8hF6W35A&s">
            </swiper-slide>
            <swiper-slide>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDl7jOb4zCRKZXP__Q033FLfaY5WQ5xM5DpgYBYRUdGzbbsGHI&s">
            </swiper-slide>
            <swiper-slide>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy9veq_OXhODlvLFvMz4Z1ATXL_acA2L8iuvnl7mNrCihj9pqT&s">
            </swiper-slide>
        </swiper>
        <span class="hidden">藏得这么深都被你发现了，mua</span>
        <div class="scrollbar"></div>
    </div>
    <div class="date">
        <div>
            <span>17/10</span>
            <span class="tag">妇女节</span>
        </div>
        <div>
            <img src="../assets/icon/lover.png" class="date-icon">
            <img src="../assets/icon/coin.png" class="date-icon">
            <img src="../assets/icon/lover.png" class="date-icon">
        </div>
    </div>
    <div class="swiper-text">
        <swiper :options="swiperOptionText">
            <swiper-slide v-for="i in 5" :key="i">
                <span>这里是我们尽快弄完</span>
            </swiper-slide>
        </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

@Component({
    components: {
        swiper,
        swiperSlide,
    },
})
export default class About extends Vue {
    public shouldCoinMove: boolean = true;
    public messsageLists: string[];
    public swiperOptionImage: {} = {
        autoplay: true,
        effect : 'slide',
        fadeEffect: {
            crossFade: true,
        },
        scrollbar: {
            el: '.scrollbar',
            hide: true,
        },
    };
    public swiperOptionText: {} = {
        effect : 'flip',
    };
}
</script>

<style scoped lang="scss">
$swiper-image-height: 25vh;
$swiper-text-height: 45vh;

.about {
    width: 100vw;
    height: 100vh;
    @include flex_column;
    background: linear-gradient(#bbb 10%, #4D4D4D0D 10%);
}

.gold-coin {
    width: 25px;
    height: 25px;
    position: absolute;
    opacity: 0;
    z-index: 999;
}
@for $i from 1 through 5 {
    .gold-coin-#{$i} {
        animation: slide-up 0.4s * $i ease  forwards;
    }
}
.swiper-image {
    width: 90vw;
    height: $swiper-image-height;
    margin-top: 40px; 
    position: relative;

    .hidden {
        position: absolute;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 12px;
    }
    img {
        width: 100%;
        height: $swiper-image-height;
    }
}
.date {
    width: 100vw;
    @include flex_row;
    padding: 0 20px;
    margin: 20px 0;
    justify-content: space-between;
    font-size: 20px;

    .tag {
        font-size: 12px;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 2px;
        border-radius: 2px;
        margin-left: 6px;
        color: white;
    }

    .date-icon {
        width: 16px;
        height: 16px;
        margin-left: 2px;
        animation: rotate-icon ease 2s infinite;
    }
}
.swiper-text {
    width: 80vw;
    height: $swiper-text-height;

    span {
        @extend .wenquan-font;
        display: block;
        width: 100%;
        height: $swiper-text-height;
        border-radius: 10px;
        box-shadow: 0 0 2px 1px #ccc;
        padding: 10px;
        background-color: white;
    }
}

.scrollbar {
    height: 4px;
    opacity: 0.4;
}

@keyframes rotate-icon {
    0% {
        opacity: 1;
    }
    50% {
        transform: rotateY(180deg);
        opacity: 0.8;
    }
    100% {
        opacity: 1;
    }
}

@keyframes slide-up {
    0% {
        left: 50%;
        top: 100%;
    }
    50% {
        transform: rotateY(180deg);
        left: 50%;
        top: 50%;
        opacity: 0.8;
    }
    100% {
        left: 80%;
        top: 0;
        opacity: 1;
    }
}
</style>
