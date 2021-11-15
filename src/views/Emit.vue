<template>
  <div>
    Emit

    <user
      @returnCounter2="getCounter"
      :counter="counter"
      @returnCounter="getCounter"
    />
  </div>
</template>

<script>
import user from "../components/user.vue";
export default {
  data: () => ({
    counter: 3,
  }),
  components: { user },
  methods: {
    getCounter(e) {
      console.log(e);
      this.counter = e;
    },
  },
};
</script>
