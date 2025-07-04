<template>
  <div class="search-popup" v-show="visible">
    <!-- 遮罩层 -->
    <div class="overlay" @click="close"></div>

    <!-- 内容区域 -->
    <div class="content">
      <!-- 搜索栏 -->
      <div class="search-header">
        <van-search
          v-model="searchValue"
          placeholder="搜索"
          shape="round"
          @search="handleSearch"
          background="#d62f3f"
          style="flex: 1; margin-right: 10px;"
        />
        <van-button type="text" @click="close">取消</van-button>
      </div>

      <!-- 推荐关键词 -->
      <div class="keywords">
        <h3>推荐关键词</h3>
        <div class="keyword-list">
          <van-tag
            v-for="keyword in recommendedKeywords"
            :key="keyword"
            :type="keywordType"
            @click="selectKeyword(keyword)"
          >
            {{ keyword }}
          </van-tag>
        </div>
      </div>

      <!-- 热门话题 -->
      <div class="hot-topics">
        <h3>热门话题</h3>
        <van-cell-group>
          <van-cell
            v-for="(topic, index) in hotTopics"
            :key="index"
            :title="topic.title"
            :label="topic.hits"
            :value="index + 1"
            is-link
            @click="selectTopic(topic)"
          />
        </van-cell-group>
      </div>

      <!-- Done按钮 -->
      <div class="action-button">
        <van-button type="primary" round @click="close">Done</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPopup',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    initialValue: {
      type: String,
      default: ''
    },
    recommendedKeywords: {
      type: Array,
      default: () => ['推荐关键词1', '推荐关键词2', '推荐关键词3']
    },
    hotTopics: {
      type: Array,
      default: () => [
        { title: '热门话题1', hits: '10.2万' },
        { title: '热门话题2', hits: '9.5万' },
        { title: '热门话题3', hits: '8.7万' }
      ]
    },
    keywordType: {
      type: String,
      default: 'primary'
    }
  },
  data() {
    return {
      searchValue: this.initialValue,
      visible: this.value
    };
  },
  watch: {
    value(val) {
      this.visible = val;
    },
    visible(val) {
      this.$emit('input', val);
    }
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit('close');
    },
    handleSearch() {
      this.$emit('search', this.searchValue);
      this.close();
    },
    selectKeyword(keyword) {
      this.searchValue = keyword;
      this.handleSearch();
    },
    selectTopic(topic) {
      this.searchValue = topic.title;
      this.handleSearch();
    }
  }
};
</script>

<style scoped>
.search-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  max-height: 80vh;
  overflow-y: auto;
}

.search-header {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f8f8f8;
}

.keywords,
.hot-topics {
  padding: 15px;
}

.keywords h3,
.hot-topics h3 {
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
}

.keyword-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.action-button {
  padding: 15px;
  text-align: center;
}
</style>