import { createStore } from 'vuex'

export default createStore({
  state: {
    invoiceModal: null,
    modalActive: null,
  },
  mutations: {
    TOGGLE_INVOICE(state) {
      state.invoiceModal = !state.invoiceModal;
    },
    TOOGLE_MODAL(state) {
      state.modalActive = !state.modalActive;
    }
  },
  actions: {
  },
  modules: {
  }
})
