<script setup lang="ts">
// import { useCommon } from '@/stores/common';

// import { computed } from 'vue';

import portalInfo from '@/data/migration/migration-portal';

// import IconArrowRight from '~icons/app/icon-arrow-right.svg';

// const commonStore = useCommon();

// const isDark = computed(() => (commonStore.theme === 'dark' ? true : false));

// interface LinkItem {
//   name: string;
//   link: string;
// }

// function handleClick(item: LinkItem) {
//   if (item.link) {
//     window.open(item.link);
//   }
// }
</script>

<template>
  <div class="migration-download">
    <h3>{{ portalInfo.download.title }}</h3>
    <p>{{ portalInfo.download.dexcription }}</p>
    <div class="migration-download-content">
      <OCard>
        <div class="card-box">
          <div class="card-box-left">
            <!-- <img
              :src="
                isDark
                  ? portalInfo.download.left.img.dark
                  : portalInfo.download.left.img.light
              "
            />
            <div class="card-info">
              <span class="name">{{ portalInfo.download.left.name }}</span>
              <span class="version">{{
                portalInfo.download.left.version
              }}</span>
            </div> -->
          </div>
        </div>
      </OCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-card) {
  overflow: visible;
  .el-card__body {
    padding: 0;
    @media screen and (max-width: 768px) {
      padding: var(--o-spacing-h5) var(--o-spacing-h6);
    }
  }
}
.migration-download {
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
    .card-box {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 1410px) {
        flex-direction: column;
      }
      &-left {
        display: flex;
        align-items: center;
        padding: 23px 0 15px 25px;
        @media screen and (max-width: 768px) {
          padding: 0;
        }
        img {
          width: 109px;
          height: 74px;
          margin-right: var(--o-spacing-h4);

          @media screen and (max-width: 440px) {
            display: none;
          }
        }

        .card-info {
          font-size: var(--o-font-size-h5);
          font-weight: 500;
          color: var(--o-color-text1);
          line-height: var(--o-line-height-h5);
          @media screen and (max-width: 1410px) {
            font-size: var(--o-font-size-h7);
            line-height: var(--o-line-height-h7);
          }
          .name {
            margin-right: var(--o-spacing-h6);
          }
        }
      }

      &-right {
        display: flex;
        position: relative;
        // @media screen and (max-width: 1410px) {
        //   align-self: end;
        // }
        img {
          width: 123px;
          height: 95px;
          // align-self: flex-end;
          position: absolute;
          right: 2px;
          bottom: 0;
          @media screen and (max-width: 768px) {
            bottom: -35%;
          }
        }
        .card-btn {
          align-self: center;
          z-index: 10;
          margin-right: 120px;
          @media screen and (max-width: 1410px) {
            padding: 15px 0 23px 20px;
            margin-right: 0;
          }
          @media screen and (max-width: 768px) {
            padding: 0;
            margin: 16px 0 0 0;
          }

          .o-button {
            position: relative;
            margin-right: var(--o-spacing-h4);
            ul {
              display: none;
              position: absolute;
              top: 15px;
              left: 60%;
              width: 160px;
              padding: var(--o-spacing-h5) 0;
              background-color: var(--o-color-bg2);
              border: 1px solid var(--o-color-brand1);
              z-index: 20;
              @media screen and (max-width: 768px) {
                top: -120px;
              }
              li {
                cursor: pointer;
                display: block;
                margin: 0;
                padding: var(--o-spacing-h8) 0;
                list-style: none;
                text-align: center;
                line-height: var(--o-line-height-h6);
                color: var(--o-color-text1);
              }
              li:hover {
                color: var(--o-color-brand1);
              }
            }
            @media screen and (max-width: 440px) {
              margin-right: 5px;
            }
            &:last-child {
              margin-right: var(--o-spacing-h3);
              @media screen and (max-width: 440px) {
                margin-right: 5px;
              }
            }
          }
          .hover {
            .o-icon {
              transform: rotate(90deg) translateY(-3px);
            }
            &:hover {
              :deep(.suffix-icon) {
                transform: none;
              }

              ul {
                display: block;
              }
            }
          }
        }
      }
    }
  }
}
</style>
