<template>
  <div>
    <button @click="substructCounter">Substruct one from this counter</button>
    <h1>{{ counter }}</h1>
    <button @click="addCounter">Add one to this counter</button>
  </div>
</template>

<script>
export default {
  props: {
    counter: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    addCounter() {
      this.$emit("returnCounter", this.counter + 1);
    },
    substructCounter() {
      this.$emit("returnCounter2", this.counter - 1);
    },
  },
};
</script>
