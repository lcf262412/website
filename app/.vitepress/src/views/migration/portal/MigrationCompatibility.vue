<script setup lang="ts">
// import { useData } from 'vitepress';
import portalInfo from '@/data/migration/migration-portal';

// import IconArrowRight from '~icons/app/icon-arrow-right.svg';

// const { lang } = useData();
// const handleGo = (path: string) => {
//   window.open('/' + lang.value + path, '_blank');
// };
</script>

<template>
  <div class="migration-compatibility">
    <h3>{{ portalInfo.compatibility.title }}</h3>
    <div class="migration-compatibility-content">
      <OCard> </OCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.migration-compatibility {
  margin-top: var(--o-spacing-h1);
  @media screen and (max-width: 768px) {
    margin-top: var(--o-spacing-h2);
  }
  h3 {
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
    .guide-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: -8px;
      }
      &-item {
        background: var(--o-color-bg1);
        padding: 16px 18px;
        text-align: left;
        width: 32%;
        border: 1px solid rgba(0, 0, 0, 0);
        @media screen and (max-width: 768px) {
          width: 100%;
          margin-top: 8px;
          padding: 12px 8px;
        }
        p {
          font-size: var(--o-font-size-h7);
          line-height: var(--o-line-height-h8);
          color: var(--o-color-text1);
          font-weight: 500;
          text-align: left;
          margin: 0 0 4px 0;
          @media screen and (max-width: 768px) {
            font-size: var(--o-font-size-text);
            line-height: var(--o-line-height-text);
          }
        }
        span {
          font-size: var(--o-font-size-text);
          line-height: var(--o-line-height-text);
          color: var(--o-color-neutral5);
          font-weight: 400;
          text-align: left;
          @media screen and (max-width: 768px) {
            font-size: var(--o-font-size-tip);
            line-height: var(--o-line-height-tip);
          }
        }
      }
      &-item:hover {
        background-color: var(--o-color-bg2);
        border: 1px solid var(--o-color-brand1);
      }
    }
    .line-box {
      margin: 32px 0 24px 0;
      width: 100%;
      height: 1px;
      background: var(--o-color-division1);
      @media screen and (max-width: 768px) {
        margin: 16px 0;
      }
    }
    .btn-box {
      text-align: center;
      display: flex;
      justify-content: center;
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
}
</style>
