<template>
  <div class="menu">
    <!--:class="navigation ? 'menu' : 'menu menuActive'" -->
    <ul>
      <li>
        <router-link to="/">
          <span class="icon"><i class="fa fa-apple"></i></span>
          <span class="title">Brand Name</span>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <span class="icon"> <i class="fa fa-home"></i></span>
          <span class="title">Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link to="#">
          <span class="icon"><i class="fa fa-users"></i></span>
          <span class="title">Customers</span>
        </router-link>
      </li>
      <li>
        <router-link to="#">
          <span class="icon"><i class="fa fa-comment"></i></span>
          <span class="title">Message</span>
        </router-link>
      </li>
      <li>
        <router-link to="#">
          <span class="icon"><i class="fa fa-question"></i></span>
          <span class="title">Help</span>
        </router-link>
      </li>
      <li>
        <router-link to="#">
          <span class="icon"><i class="fa fa-cog"></i></span>
          <span class="title">Settings</span>
        </router-link>
      </li>
      <li>
        <router-link to="#">
          <span class="icon"><i class="fa fa-unlock-alt"></i></span>
          <span class="title">Password</span>
        </router-link>
      </li>
      <li @click="signout">
        <router-link to="">
          <span class="icon"><i class="fa fa-sign-out"></i></span>
          <span class="title">Sign Out</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    navigation: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    signout() {
      console.log("SIGNOUT");
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss">
.menu {
  // position: absolute;
  // width: 22%;
  height: 100vh;
  background: var(--blue);
  border-left: 10px solid var(--blue);
  overflow: hidden;

  ul {
    height: 100%;
    width: 100%;

    li {
      width: 100%;
      list-style: none;
      border-radius: 30px 0 0 30px;

      &:hover {
        background-color: var(--white);
        a {
          color: var(--blue);
        }

        // curve outside
        a::before {
          content: "";
          position: absolute;
          right: 0;
          top: -50px;
          width: 50px;
          height: 50px;
          background-color: transparent;
          border-radius: 50%;
          box-shadow: 35px 35px 0 10px var(--white);
        }
        a::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: -50px;
          width: 50px;
          height: 50px;
          background-color: transparent;
          border-radius: 50%;
          box-shadow: 35px -35px 0 10px var(--white);
        }
      }

      a {
        position: relative;
        display: block;
        width: 100%;
        display: flex;
        color: var(--white);

        &:focus {
          background-color: var(--white);
          color: var(--blue);
          border-radius: 30px 0 0 30px;

          // curve outside
          &::before {
            content: "";
            position: absolute;
            right: 0;
            top: -50px;
            width: 50px;
            height: 50px;
            background-color: transparent;
            border-radius: 50%;
            box-shadow: 35px 35px 0 10px var(--white);
          }
          &::after {
            content: "";
            position: absolute;
            right: 0;
            bottom: -50px;
            width: 50px;
            height: 50px;
            background-color: transparent;
            border-radius: 50%;
            box-shadow: 35px -35px 0 10px var(--white);
          }
        }

        .icon {
          position: relative;
          display: block;
          min-width: 60px;
          height: 60px;
          line-height: 70px;
          text-align: center;
          i {
            font-size: 1.75em;
          }
        }

        .title {
          position: relative;
          display: block;
          padding: 0 10px;
          height: 60px;
          line-height: 60px;
          text-align: start;
          white-space: nowrap;
        }
      }

      &:first-child {
        margin-bottom: 40px;
        pointer-events: none;
      }
    }
  }
}

.menuActive {
  width: 6%;
}
</style>
