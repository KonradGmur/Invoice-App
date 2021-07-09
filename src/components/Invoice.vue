<template>
  <router-link :to="{ name: 'Invoice' }"></router-link>
</template>
<script>
export default {
  name: "invoice",
  props: ["invoice"],
};
</script>
<style lang="scss"></style>
