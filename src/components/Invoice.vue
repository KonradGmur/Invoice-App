<template>
  <router-link
    class="invoice flex"
    :to="{ name: 'Invoice', params: { invoiceId: invoice.invoiceId } }"
  >
    <div class="left flex">
      <span class="tracking-number">{{ invoice.invoiceId }}</span>
      <span class="due-date">{{ invoice.paymentDueDate }}</span>
      <span class="person">{{ invoice.clientName }}</span>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "invoice",
  props: ["invoice"],
};
</script>
<style lang="scss"></style>
