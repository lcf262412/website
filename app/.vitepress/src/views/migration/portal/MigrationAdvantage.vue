<script setup lang="ts">
import { useData } from 'vitepress';
// import { useCommon } from '@/stores/common';
// import { computed } from 'vue';
import portalInfo from '@/data/migration/migration-portal';
import IconArrowRight from '~icons/app/icon-arrow-right.svg';

// const commonStore = useCommon();

// const isDark = computed(() => (commonStore.theme === 'dark' ? true : false));

const { lang } = useData();
const handleGo = (path: string) => {
  window.open('/' + lang.value + path, '_blank');
};
</script>
<template>
  <div class="migration-advantage">
    <h2>{{ portalInfo.advantage.title }}</h2>
    <p>{{ portalInfo.advantage.dexcription }}</p>
    <div class="migration-advantage-content">
      <OCard class="content-card">
        <!-- <div class="advantage">
          <div class="advantage-item">
            <img :src="portalInfo.advantage.cardTopLeft.url" />
            <div class="item-right title-center">
              <p>{{ portalInfo.advantage.cardTopLeft.title01 }}</p>
              <p>{{ portalInfo.advantage.cardTopLeft.title02 }}</p>
              <span>{{ portalInfo.advantage.cardTopLeft.description }}</span>
            </div>
          </div>
          <img
            class="advantage-transition"
            :src="portalInfo.advantage.transitionRight"
          />
          <img
            class="advantage-down"
            :src="portalInfo.advantage.transitionDown"
          />
          <div class="advantage-item">
            <img :src="portalInfo.advantage.cardTopRight.url" />
            <div class="item-right">
              <p>{{ portalInfo.advantage.cardTopRight.title01 }}</p>
              <p v-show="portalInfo.advantage.cardTopRight.title02 != ''">
                {{ portalInfo.advantage.cardTopRight.title02 }}
              </p>
              <span>{{ portalInfo.advantage.cardTopRight.description }}</span>
            </div>
          </div>
        </div> -->
      </OCard>
    </div>
    <div class="btn-box">
      <OButton
        animation
        type="text"
        class="btn-box-item"
        @click="handleGo(portalInfo.advantage.btn.link)"
      >
        <template #suffixIcon>
          <IconArrowRight class="btn-box-item-icon"></IconArrowRight>
        </template>
        {{ portalInfo.advantage.btn.text }}
      </OButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-card__body) {
  @media screen and (max-width: 768px) {
    padding: 0;
  }
}
.migration-advantage {
  h2 {
    font-size: var(--o-font-size-h3);
    font-weight: 300;
    color: var(--o-color-text1);
    line-height: var(--o-line-height-h3);
    width: 100%;
    text-align: center;
    margin-top: 0;
    @media screen and (max-width: 768px) {
      font-size: var(--o-font-size-h8);
      line-height: var(--o-line-height-h8);
      margin: 0;
    }
  }
  p {
    font-size: var(--o-font-size-h7);
    font-weight: 300;
    color: var(--o-color-text1);
    line-height: var(--o-line-height-h8);
    width: 100%;
    text-align: center;
    margin-top: var(--o-spacing-h5);
    @media screen and (max-width: 768px) {
      font-size: var(--o-font-size-tip);
      line-height: var(--o-line-height-tip);
      margin-top: var(--o-spacing-h8);
    }
  }
  &-content {
    margin-top: var(--o-spacing-h3);
    @media screen and (max-width: 768px) {
      margin-top: var(--o-spacing-h5);
    }
    .content-card {
      margin-top: var(--o-spacing-h4);
      @media screen and (max-width: 768px) {
        margin: var(--o-spacing-h5) 0 0 0;
      }
    }
  }
  .advantage {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 47px;
    @media screen and (max-width: 1410px) {
      padding: 20px 20px;
    }
    @media screen and (max-width: 768px) {
      padding: 0;
      margin: 16px 12px;
      flex-direction: column;
    }
    &-transition {
      max-height: 64px;
      max-width: 36px;
      margin: auto 24px;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    &-down {
      display: none;
      @media screen and (max-width: 768px) {
        display: block;
        max-height: 22px;
        max-width: 38px;
        margin: 12px auto;
      }
    }
    &-item {
      display: flex;
      flex-direction: row;
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
      .item-right {
        display: flex;
        flex-direction: column;
        margin-left: 31px;
        @media screen and (max-width: 1410px) {
          margin: auto 20px;
        }
        @media screen and (max-width: 1210px) {
          margin: auto 10px;
        }
        @media screen and (max-width: 768px) {
          margin: 0;
        }
        p {
          margin: 0;
          font-size: var(--o-font-size-h7);
          font-weight: 500;
          color: var(--o-color-text1);
          text-align: left;
          line-height: var(--o-line-height-h8);
          @media screen and (max-width: 768px) {
            text-align: center;
          }
        }
        span {
          margin-top: var(--o-spacing-h5);
          font-size: var(--o-font-size-text);
          font-weight: 400;
          text-align: left;
          white-space: pre-line;
          color: var(--o-color-text4);
          line-height: var(--o-line-height-text);
          @media screen and (max-width: 768px) {
            margin-top: 4px;
            text-align: center;
            font-size: var(--o-font-size-tip);
            line-height: var(--o-line-height-tip);
          }
        }
      }
      .title-center {
        white-space: nowrap;
        justify-content: center;
      }

      img {
        max-width: 200px;
        max-height: 150px;
        margin: auto;
        @media screen and (max-width: 1610px) {
          max-width: 150px;
        }
        @media screen and (max-width: 1410px) {
          max-width: 120px;
          max-height: 100px;
        }
      }
    }
    .benefit-pc {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    .benefit-item {
      text-align: center;
      margin: 0 40px;
      cursor: pointer;
      img {
        max-width: 64px;
        max-height: 64px;
        @media screen and (max-width: 1410px) {
          max-width: 48px;
          max-height: 48px;
        }
        @media screen and (max-width: 768px) {
          max-width: 40px;
          max-height: 40px;
        }
      }
      p {
        margin-top: 16px;
        font-size: var(--o-font-size-h7);
        font-weight: 500;
        line-height: var(--o-line-height-h8);
        @media screen and (max-width: 1610px) {
          font-size: var(--o-font-size-h8);
        }
        @media screen and (max-width: 768px) {
          margin: 4px 0 0 0;
          font-size: var(--o-font-size-text);
          font-weight: 400;
          line-height: var(--o-line-height-text);
        }
      }
      @media screen and (max-width: 768px) {
        margin: 0;
      }
    }
    .benefit-mobile {
      display: none;
      @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin: 8px 11px;
      }
      &-column {
        text-align: center;
        .border-box-row {
          margin: auto;
          width: 90%;
          height: 1px;
          background: var(--o-color-division1);
          margin-top: 12px;
          margin-bottom: 12px;
        }
      }
      .border-box-column {
        height: 157px;
        width: 1px;
        background: var(--o-color-division1);
      }
    }
  }
  .btn-box {
    margin-top: var(--o-spacing-h4);
    text-align: center;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1080px) {
      margin-top: var(--o-spacing-h5);
    }
    &-item {
      margin: auto;
      display: flex;
      padding: 0;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 1080px) {
        padding: 0;
        font-size: var(--o-font-size-text);
      }
      &-icon {
        color: var(--o-color-brand1);
        width: var(--o-font-size-h8);
        height: var(--o-font-size-h8);
      }
    }
  }
}
</style>
