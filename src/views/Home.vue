<template>
  <div>
    <div :class="navigation ? 'dashboard' : 'activeDashboard'">
      <Menu :navigation="navigation" />
    </div>

    <div class="container" :class="navigation ? 'main' : 'mainActive'">
      <Header :navigation="navigation" @toggleEmit="getNavigation" />
      <Status
        v-for="(item, index) in statusNum"
        :key="index"
        :dailyViews="item.dailyViews"
        :sales="item.sales"
        :comments="item.comments"
        :earning="item.earning"
      />
      <Table />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Menu from "../components/Menu.vue";
import Status from "../components/Status.vue";
import Table from "../components/Table.vue";
export default {
  components: { Menu, Header, Status, Table },
  data: () => ({
    navigation: true,

    statusNum: [
      {
        dailyViews: "1,504",
        sales: 80,
        comments: 284,
        earning: "$7,842",
      },
    ],
  }),

  methods: {
    getNavigation(e) {
      this.navigation = e;
    },
  },
};
</script>

<style lang="scss">
.main {
  position: absolute;
  top: 0;
  left: 22%;
  width: 78%;
  transition: all 0.35s linear;
}

.mainActive {
  position: absolute;
  top: 0;
  width: 94%;
  left: 6%;
  transition: all 0.35s linear;
}

.dashboard {
  position: fixed;
  top: 0;
  left: 0;
  width: 22%;
  transition: all 0.35s linear;
}
.activeDashboard {
  position: fixed;
  top: 0;
  left: 0;
  width: 6%;
  transition: all 0.35s linear;
}
</style>
