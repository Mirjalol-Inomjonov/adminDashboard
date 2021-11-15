<template>
  <header
    :class="navigation ? 'header' : 'header headerActive'"
    class="container"
  >
    <div class="header__toggle" @click="toggleMenu">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <div class="header__search">
      <label>
        <input type="text" placeholder="Search here" />
        <i class="fa fa-search"></i>
      </label>
    </div>
    <div class="header__avatar">
      <a href="#">
        <img :src="avatar" :alt="alt" />
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      avatar: "https://picsum.photos/200/200", // https://picsum.photos/200/200
      alt: "Ann", //../assets/ann.jpg
    };
  },
  props: {
    navigation: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    toggleMenu() {
      this.$emit("toggleEmit", !this.navigation);
    },
  },
};
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 20px;
  padding: 0 12px;
  margin-top: 12px;
  box-shadow: 0 10px 25px 7px rgba(0, 0, 0, 0.08);
  z-index: 500;

  &__toggle {
    width: 40px;
    height: 40px;
    font-size: 2.5em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:active {
      transform: scale(0.9);
    }
  }

  &__search {
    position: relative;
    width: 400px;
    margin: 0 10px;

    label {
      width: 100%;
      input {
        width: 100%;
        height: 40px;
        border-radius: 40px;
        padding: 5px 20px 5px 35px;
        outline: none;
        border: 1px solid var(--black2);
        &:focus {
          box-shadow: 0 0 8px 2px #333;
          border: none;
        }
      }

      i {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 1.2em;
      }
    }
  }

  &__avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
