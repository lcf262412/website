<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue';
import { useRouter, useData } from 'vitepress';

import { useI18n } from '@/i18n';
import useWindowResize from '@/components/hooks/useWindowResize';

import AppContent from '@/components/AppContent.vue';
import AppPaginationMo from '@/components/AppPaginationMo.vue';
import BannerLevel2 from '@/components/BannerLevel2.vue';
import NotFound from '@/NotFound.vue';

import banner from '@/assets/illustrations/banner-secondary.png';
import illustration from '@/assets/illustrations/blog.png';

import IconCalendar from '~icons/app/icon-calendar.svg';
import IconUser from '~icons/app/icon-user.svg';
import IconRight from '~icons/app/icon-arrow-right.svg';
import IconSearch from '~icons/app/icon-search.svg';

import { getSortData, getTagsData } from '@/api/api-search';
import type { BlogData, ParamsType } from '@/shared/@types/type-blogs';

const router = useRouter();
const { lang } = useData();
const i18n = useI18n();
const userCaseData = computed(() => i18n.value.common.COMMON_CONFIG);
const screenWidth = useWindowResize();

const isMobile = computed(() => (screenWidth.value <= 768 ? true : false));

const isShowData = ref(false);
// 博客列表
const sortParams = reactive({
  page: 1,
  pageSize: 9,
  lang: lang.value,
  category: 'blog',
});
// 标签
const tagsParams = reactive({
  lang: lang.value,
  category: 'blog',
  want: '',
});
// pc端筛选数据
const selectData = ref<any>([
  {
    title: '时间',
    select: [],
  },
  {
    title: '作者',
    select: [],
  },
  {
    title: '标签',
    select: [],
  },
]);
const selectTimeVal = ref('');
const selectAuthorVal = ref('');
const selectTagsVal = ref('');

// 博客列表数据
const blogCardData = ref<BlogData[]>([]);
// 分页数据
const paginationData = ref({
  total: 0,
  pagesize: 9,
  currentpage: 0,
});

const toBlogContent = (path: string) => {
  router.go(`/${path}`);
};
// 获取标签数据
const getTagsList = () => {
  tagsParams.want = 'archives';
  getTagsData(tagsParams).then((res) => {
    selectData.value[0].select = [];
    res.obj.totalNum.forEach((item: any) => {
      selectData.value[0].select.push(item.key);
    });
    tagsParams.want = 'author';
    getTagsData(tagsParams)
      .then((res) => {
        selectData.value[1].select = [];
        res.obj.totalNum.forEach((item: any) => {
          selectData.value[1].select.push(item.key);
        });
        tagsParams.want = 'tags';
        getTagsData(tagsParams).then((res) => {
          selectData.value[2].select = [];
          res.obj.totalNum.forEach((item: any) => {
            selectData.value[2].select.push(item.key);
          });
        });
      })
      .catch((error: any) => {
        isShowData.value = false;
        throw new Error(error);
      });
  });
};
// 获取列表数据
const getListData = (params: ParamsType) => {
  getSortData(params)
    .then((res) => {
      if (res.obj.count === 0) {
        isShowData.value = false;
      } else {
        paginationData.value.total = res.obj.count;
        paginationData.value.currentpage = res.obj.page;
        paginationData.value.pagesize = res.obj.pageSize;
        blogCardData.value = res.obj.records;
        for (let i = 0; i < blogCardData.value.length; i++) {
          if (typeof blogCardData.value[i].author === 'string') {
            blogCardData.value[i].author = [blogCardData.value[i].author];
          }
          // if (blogCardData.value[i].archives.length > 10) {
          //   blogCardData.value[i].archives = blogCardData.value[
          //     i
          //   ].archives.substring(0, 7);
          // }
        }
        isShowData.value = true;
      }
    })
    .catch((error: any) => {
      isShowData.value = false;
      throw new Error(error);
    });
};

// pc筛选
const selectMethod = () => {
  const params = {
    page: 1,
    pageSize: 9,
    lang: lang.value,
    category: 'blog',
    archives: selectTimeVal.value === '' ? undefined : selectTimeVal.value,
    author: selectAuthorVal.value === '' ? undefined : selectAuthorVal.value,
    tags: selectTagsVal.value === '' ? undefined : selectTagsVal.value,
  };
  getListData(params);
};

const changeTime = () => {
  selectMethod();
  if (selectTimeVal.value !== '') {
    const wantauthor = {
      lang: lang.value,
      category: 'blog',
      want: 'author',
      condition: {
        archives: selectTimeVal.value,
        tags: selectTagsVal.value === '' ? undefined : selectTagsVal.value,
      },
    };
    const wanttags = {
      lang: lang.value,
      category: 'blog',
      want: 'tags',
      condition: {
        archives: selectTimeVal.value,
        author:
          selectAuthorVal.value === '' ? undefined : selectAuthorVal.value,
      },
    };
    getTagsData(wantauthor).then((res) => {
      selectData.value[1].select = [];
      res.obj.totalNum.forEach((item: any) => {
        selectData.value[1].select.push(item.key);
      });
      getTagsData(wanttags)
        .then((res) => {
          selectData.value[2].select = [];
          res.obj.totalNum.forEach((item: any) => {
            selectData.value[2].select.push(item.key);
          });
        })
        .catch((error) => {
          throw new Error(error);
        });
    });
  } else if (
    selectTimeVal.value === '' &&
    selectAuthorVal.value === '' &&
    selectTagsVal.value === ''
  ) {
    getTagsList();
  } else {
    const params = {
      lang: lang.value,
      category: 'blog',
      want: 'archives',
      condition: {
        author:
          selectAuthorVal.value === '' ? undefined : selectAuthorVal.value,
        tags: selectTagsVal.value === '' ? undefined : selectTagsVal.value,
      },
    };
    getTagsData(params).then((res) => {
      selectData.value[0].select = [];
      res.obj.totalNum.forEach((item: any) => {
        selectData.value[0].select.push(item.key);
      });
    });
  }
};
const changeAuthor = () => {
  selectMethod();
  if (selectAuthorVal.value !== '') {
    const wantarchive = {
      lang: lang.value,
      category: 'blog',
      want: 'archives',
      condition: {
        author: selectAuthorVal.value,
        tags: selectTagsVal.value === '' ? undefined : selectTagsVal.value,
      },
    };
    const wanttags = {
      lang: lang.value,
      category: 'blog',
      want: 'tags',
      condition: {
        archives: selectTimeVal.value === '' ? undefined : selectTimeVal.value,
        author: selectAuthorVal.value,
      },
    };
    getTagsData(wantarchive).then((res) => {
      selectData.value[0].select = [];
      res.obj.totalNum.forEach((item: any) => {
        selectData.value[0].select.push(item.key);
      });
      getTagsData(wanttags)
        .then((res) => {
          selectData.value[2].select = [];
          res.obj.totalNum.forEach((item: any) => {
            selectData.value[2].select.push(item.key);
          });
        })
        .catch((error) => {
          throw new Error(error);
        });
    });
  } else if (
    selectTimeVal.value === '' &&
    selectAuthorVal.value === '' &&
    selectTagsVal.value === ''
  ) {
    getTagsList();
  } else {
    const params = {
      lang: lang.value,
      category: 'blog',
      want: 'author',
      condition: {
        archives: selectTimeVal.value === '' ? undefined : selectTimeVal.value,
        tags: selectTagsVal.value === '' ? undefined : selectTagsVal.value,
      },
    };
    getTagsData(params).then((res) => {
      selectData.value[1].select = [];
      res.obj.totalNum.forEach((item: any) => {
        selectData.value[1].select.push(item.key);
      });
    });
  }
};
const changeTags = () => {
  selectMethod();
  if (selectTagsVal.value !== '') {
    const wantarchive = {
      lang: lang.value,
      category: 'blog',
      want: 'archives',
      condition: {
        author:
          selectAuthorVal.value === '' ? undefined : selectAuthorVal.value,
        tags: selectTagsVal.value,
      },
    };
    const wantauthor = {
      lang: lang.value,
      category: 'blog',
      want: 'author',
      condition: {
        archives: selectTimeVal.value === '' ? undefined : selectTimeVal.value,
        tags: selectTagsVal.value,
      },
    };
    getTagsData(wantarchive).then((res) => {
      selectData.value[0].select = [];
      res.obj.totalNum.forEach((item: any) => {
        selectData.value[0].select.push(item.key);
      });
      getTagsData(wantauthor)
        .then((res) => {
          selectData.value[1].select = [];
          res.obj.totalNum.forEach((item: any) => {
            selectData.value[1].select.push(item.key);
          });
        })
        .catch((error) => {
          throw new Error(error);
        });
    });
  } else if (
    selectTimeVal.value === '' &&
    selectAuthorVal.value === '' &&
    selectTagsVal.value === ''
  ) {
    getTagsList();
  } else {
    const params = {
      lang: lang.value,
      category: 'blog',
      want: 'tags',
      condition: {
        author:
          selectAuthorVal.value === '' ? undefined : selectAuthorVal.value,
        archives: selectTimeVal.value === '' ? undefined : selectTimeVal.value,
      },
    };
    getTagsData(params).then((res) => {
      selectData.value[2].select = [];
      res.obj.totalNum.forEach((item: any) => {
        selectData.value[2].select.push(item.key);
      });
    });
  }
};

onMounted(() => {
  getListData(sortParams);
  getTagsList();
});
// 页数改变
const changeCurrent = (val: number) => {
  const params: ParamsType = {
    category: 'blog',
    lang: lang.value,
    page: val,
    pageSize: paginationData.value.pagesize,
  };
  selectAuthorVal.value ? (params['author'] = selectAuthorVal.value) : '';
  selectTagsVal.value ? (params['tags'] = selectTagsVal.value) : '';
  selectTimeVal.value ? (params['archives'] = selectTimeVal.value) : '';
  getListData(params);
};
const postBlog = () => {
  router.go(`/${lang.value}/blogs/guidance/`);
};
// 计算总页数
const pageTotal = computed(() =>
  Math.ceil(paginationData.value.total / paginationData.value.pagesize)
);
const changeCurrentMoblie = (val: string) => {
  if (val === 'prev' && paginationData.value.currentpage > 1) {
    paginationData.value.currentpage = paginationData.value.currentpage - 1;
    changeCurrent(paginationData.value.currentpage);
  } else if (
    val === 'next' &&
    paginationData.value.currentpage < pageTotal.value
  ) {
    paginationData.value.currentpage = paginationData.value.currentpage + 1;
    changeCurrent(paginationData.value.currentpage);
  }
};
</script>

<template>
  <BannerLevel2
    :background-image="banner"
    :title="userCaseData.BLOG"
    :illustration="illustration"
  >
    <template #default>
      <OButton
        class="post-btn"
        type="outline"
        animation
        size="nomral"
        @click="postBlog"
      >
        {{ userCaseData.STRATEGY }}
        <template #suffixIcon>
          <OIcon class="banner-icon"><IconRight /></OIcon>
        </template>
      </OButton>
    </template>
  </BannerLevel2>
  <AppContent :mobile-top="16">
    <template v-if="true">
      <div class="blog-select">
        <div class="blog-select-item">
          <span class="blog-select-item-title">{{ userCaseData.TIME }}</span>
          <ClientOnly>
            <OSelect
              v-model="selectTimeVal"
              filterable
              clearable
              :placeholder="userCaseData.ALL"
              @change="changeTime"
            >
              <template #prefix>
                <OIcon>
                  <IconSearch />
                </OIcon>
              </template>
              <OOption
                v-for="item in selectData[0].select"
                :key="item"
                :label="item"
                :value="item"
              />
            </OSelect>
          </ClientOnly>
        </div>
        <div class="blog-select-item">
          <span class="blog-select-item-title">{{ userCaseData.AUTHOR }}</span>
          <ClientOnly>
            <OSelect
              v-model="selectAuthorVal"
              filterable
              clearable
              :placeholder="userCaseData.ALL"
              @change="changeAuthor"
            >
              <template #prefix>
                <OIcon>
                  <IconSearch />
                </OIcon>
              </template>
              <OOption
                v-for="item in selectData[1].select"
                :key="item"
                :label="item"
                :value="item"
              />
            </OSelect>
          </ClientOnly>
        </div>
        <div class="blog-select-item">
          <span class="blog-select-item-title">{{ userCaseData.TAGS }}</span>
          <ClientOnly>
            <OSelect
              v-model="selectTagsVal"
              filterable
              clearable
              :placeholder="userCaseData.ALL"
              @change="changeTags"
            >
              <template #prefix>
                <OIcon>
                  <IconSearch />
                </OIcon>
              </template>
              <OOption
                v-for="item in selectData[2].select"
                :key="item"
                :label="item"
                :value="item"
              />
            </OSelect>
          </ClientOnly>
        </div>
      </div>
    </template>
    <template v-if="isShowData">
      <div class="blog-list">
        <OCard
          v-for="item in blogCardData"
          :key="item"
          class="blog-list-item"
          shadow="hover"
          @click="toBlogContent(item.path)"
        >
          <p class="blog-list-item-title">{{ item.title }}</p>
          <div class="blog-list-item-info">
            <div class="infodetail">
              <OIcon class="icon"><IconUser /></OIcon>
              <p v-for="aut in item.author" :key="aut">
                {{ aut }}
              </p>
            </div>
            <div class="infodetail">
              <OIcon class="icon"><IconCalendar /></OIcon>
              <p>{{ item.date }}</p>
            </div>
          </div>
          <p class="blog-list-item-content">{{ item.summary }}</p>
          <div class="blog-list-item-tags">
            <OTag
              v-for="tag in item.tags"
              :key="tag"
              type="secondary"
              class="tag-item"
              >{{ tag }}</OTag
            >
          </div>
        </OCard>
      </div>
      <div class="blog-pagination">
        <ClientOnly>
          <OPagination
            v-if="!isMobile"
            v-model:currentPage="paginationData.currentpage"
            v-model:page-size="paginationData.pagesize"
            :background="true"
            layout="sizes, prev, pager, next, slot, jumper"
            :total="paginationData.total"
            :page-sizes="[3, 6, 9]"
            @current-change="changeCurrent"
            @size-change="changeCurrent(1)"
          >
            <span class="pagination-slot"
              >{{ paginationData.currentpage }}/{{ pageTotal }}</span
            >
          </OPagination>
          <AppPaginationMo
            v-else
            :current-page="paginationData.currentpage"
            :total-page="pageTotal"
            @turn-page="changeCurrentMoblie"
          />
        </ClientOnly>
      </div>
    </template>
    <NotFound v-else />
  </AppContent>
</template>

<style lang="scss" scoped>
@mixin showline {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
:deep(.el-card__body) {
  padding: var(--o-spacing-h2);
  @media (max-width: 1100px) {
    padding: var(--o-spacing-h4);
    height: 100%;
  }
  @media (max-width: 415px) {
    padding: var(--o-spacing-h6);
    min-height: 152px;
    max-height: 152px;
  }
}
.post-btn {
  color: var(--o-color-white);
  border-color: var(--o-color-white);
  @media (max-width: 767px) {
    padding: 3px 12px;
    font-size: var(--o-font-size-text);
    line-height: var(--o-line-height-text);
  }
  .banner-icon {
    @media (max-width: 767px) {
      font-size: var(--o-font-size-text);
    }
  }
}
.blog-select {
  display: flex;
  flex-direction: row;
  width: 1416px;
  @media (max-width: 1100px) {
    display: none;
  }
  .blog-select-item {
    margin-right: var(--o-spacing-h1);
    .o-icon {
      font-size: var(--o-font-size-h7);
      @media screen and (max-width: 768px) {
        font-size: var(--o-font-size-h8);
      }
    }
    .blog-select-item-title {
      margin-right: var(--o-spacing-h5);
      color: var(--o-color-text1);
      font-size: var(--o-font-size-h7);
      line-height: var(--o-line-height-h7);
    }
  }
}
.blog-list {
  margin: var(--o-spacing-h2) auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--o-spacing-h4);
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: var(--o-spacing-h5);
  }
  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: var(--o-spacing-h5);
    grid-template-columns: repeat(1, 1fr);
    grid-gap: var(--o-spacing-h5);
  }
  .blog-list-item {
    background-image: url(@/assets/category/blogs/blog-bg.png);
    min-height: 248px;
    max-height: 248px;
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    &:hover {
      box-shadow: var(--o-shadow-l2_hover);
    }
    @media (max-width: 415px) {
      min-height: 152px;
      max-height: 152px;
    }
    .blog-list-item-title {
      font-size: var(--o-font-size-h7);
      margin-bottom: var(--o-spacing-h3); // 32px
      color: var(--o-color-text1);
      height: 42px;
      @include showline();
      -webkit-line-clamp: 2;
      @media (max-width: 768px) {
        height: auto;
      }
      @media (max-width: 415px) {
        margin-bottom: var(--o-spacing-h5);
        font-size: var(--o-font-size-text);
        line-height: var(--o-line-height-text);
        font-weight: 500;
        -webkit-line-clamp: 1;
      }
      p {
        display: inline-block;
        @include showline();
        -webkit-line-clamp: 2;
      }
    }
    .blog-list-item-info {
      color: var(--o-color-text4);
      display: flex;
      flex-direction: row;
      align-items: center;
      .icon {
        font-size: var(--o-font-size-h8);
        display: inline-block;
      }
      p {
        font-size: var(--o-font-size-tip);
        display: inline-block;
        margin-left: var(--o-spacing-h9);
        line-height: var(--o-line-height-tip);
        @include showline();
        -webkit-line-clamp: 1;
      }
      .infodetail {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: var(--o-spacing-h3);
      }
    }
    .blog-list-item-content {
      font-size: var(--o-font-size-text);
      line-height: var(--o-line-height-text);
      margin-top: var(--o-spacing-h5);
      height: 44px;
      color: var(--o-color-text1);
      @include showline();
      -webkit-line-clamp: 2;
      @media (max-width: 415px) {
        font-size: var(--o-font-size-tip);
        line-height: var(--o-line-height-tip);
        height: auto;
        @include showline();
        -webkit-line-clamp: 1;
      }
    }
    .blog-list-item-tags {
      display: flex;
      margin-top: var(--o-spacing-h7);
      height: 24px;
      flex-wrap: wrap;
      overflow: hidden;
      @media (max-width: 415px) {
        margin-top: var(--o-spacing-h5);
      }
      .tag-item {
        font-size: var(--o-spacing-h6);
        margin-right: var(--o-spacing-h8);
        color: var(--o-color-black);
        margin-bottom: var(--o-spacing-h10);
        @media (max-width: 415px) {
          font-size: var(--o-font-size-tip);
          line-height: var(--o-line-height-tip);
        }
      }
    }
  }
}
.pagination-slot {
  font-size: var(--o-font-size-text);
  font-weight: 300;
  color: var(--o-color-text1);
  line-height: var(--o-spacing-h4);
}
</style>
