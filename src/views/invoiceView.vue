<template>
  <div v-if="currentInvoice" class="invoice-view container">
    <router-link class="nav-link flex" :to="{ name: 'Home' }">
      <img src="@/assets/icon-arrow-left.svg" alt="arrow" /> Go Back
    </router-link>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "invoiceView",
  data() {
    return {
      currentInvoice: null,
    };
  },
  created() {
    this.getCurrentInvoice();
  },
  methods: {
    ...mapMutations([SET_CURRENT_INVOICE]),

    getCurrentInvoice() {
      this.SET_CURRENT_INVOICE(this.$route.params.invoiceId);
      this.currentInvoice = this.currentInvoiceArray[0];
    },
  },
  computed: {
    ...mapState(["currentInvoiceArray"]),
  },
};
</script>

<style></style>
