<template>
  <Card dis-hover :style="{ height: '100%' }">
    <Modal
      v-model="modal6"
      title="此操作不可逆，请谨慎选择"
      :loading="deleteLoading"
      @on-ok="asyncOK"
    >
      <p>确定要删除{{ delTitle }}吗</p>
    </Modal>
    <Table :columns="columns1" :data="data1" :loading="isLoading">
      <template slot-scope="{ row, index }" slot="action">
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="toEdit(row, index)"
          >查看</Button
        >
        <Button type="error" size="small" @click="del(row, index)">删除</Button>
      </template>
      <template slot-scope="{ row, index }" slot="amount">
        <Tooltip :content="row.amount >= 1000 ? '热门' : '新兴'" placement="right" theme="light" transfer="true"
          ><Tag :color="row.amount >= 1000 ? 'red' : 'green'">{{
            row.amount
          }}</Tag></Tooltip
        >
      </template>
    </Table>
    <div style="margin: 10px; overflow: hidden">
      <div style="float: right">
        <Page
          :total="this.total"
          :current="1"
          show-elevator
          show-sizer
          @on-change="changePage"
          @on-page-size-change="changePageSize"
        ></Page>
      </div>
    </div>
  </Card>
</template>

<script>
import { getArticleList, delArticle } from "./../../network/article.js";
import moment from "moment";

export default {
  name: "ArticleList",
  components: {},
  props: {},
  data() {
    return {
      total: 0,
      lists: [],
      columns1: [],
      data1: [],
      isLoading: false,
      modal6: false,
      delTitle: "123",
      delId: 0,
      deleteLoading: true,
      titleDisplayMap: {
        title: "标题",
        author: "作者",
        createAt: "修改时间",
        amount: "阅读量",
        id: "id",
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    getData() {
      this.isLoading = true;
      getArticleList()
        .then((resp) => {
          this.lists = resp.data.list;
          this.total = resp.data.total;
        })
        .finally(() => {
          this.columns1 = this.setCol();
          this.data1 = this.setData();
          this.isLoading = false;
        });
    },

    setCol() {
      const col = Object.keys(this.lists[0]).map((item) => {
        if (item === "amount") {
          return {
            title: this.titleDisplayMap[item],
            key: item,
            align: "center",
            slot: "amount",
          };
        }
        return {
          title: this.titleDisplayMap[item],
          key: item,
          align: "center",
        };
      });
      col.push({
        title: "操作",
        slot: "action",
        width: 150,
        align: "center",
      });
      return col;
    },

    setData() {
      const data = this.lists.map((item) => {
        const date = moment(item.createAt).format("YYYY-MM-DD HH:mm");
        item.createAt = date;
        return item;
      });
      return data;
    },

    toEdit(row, index) {
      this.$router.push({ path: `/admin/article/edit`, query: { id: row.id } });
    },

    del(row, index) {
      this.delTitle = row.title;
      this.delId = row.id;
      this.modal6 = true;
    },

    asyncOK() {
      delArticle(this.delId)
        .then((resp) => {
          // console.log(resp);
          this.modal6 = false;
          this.$Message.success(resp.data.msg);
        })
        .finally(() => {
          this.getData();
        });
    },

    changePage(page) {
      this.getData();
    },

    changePageSize(pageSize) {
      this.getData();
    },
  },
  created() {
    this.getData();
  },
  mounted() {},
  updated() {},
  destroyed() {},
};
</script>
<style scoped>
</style>