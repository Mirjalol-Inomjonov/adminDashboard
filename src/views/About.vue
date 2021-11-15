<template>
  <div>
    <div :class="navigation ? 'dashboard' : 'activeDashboard'">
      <Menu :navigation="navigation" />
    </div>

    <div :class="navigation ? 'main' : 'mainActive'">
      <Header :navigation="navigation" @toggleEmit="getNavigation" />
      <RecentOrders id="recentOrders"/>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Header from "../components/Header.vue";
import RecentOrders from "../components/RecentOrders.vue";

export default {
  components: { RecentOrders, Menu, Header },
    data: () => ({
    navigation: true,
  }),

  methods: {
    getNavigation(e) {
      this.navigation = e;
    },
  },
};
</script>

<style lang="scss">
#recentOrders {
  margin-top: 60px;
}
</style>
