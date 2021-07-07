import { createStore } from 'vuex'
import db from '../firebase/firebaseInit'

export default createStore({
  state: {
    invoiceData: [],
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
    async GET_INVOICES({ commit, state }) {
      const getData = db.collection('invoices');
      const results = await getData.get();
    }
  },
  modules: {
  }
})
