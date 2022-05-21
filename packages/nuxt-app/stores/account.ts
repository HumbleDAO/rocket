//store.ts
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAccountStore = defineStore('account', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      address: '0x47892345h234g5y6897234y563uy456t8932378945234',
    }
  },
  actions: {
    setAddress(account: string) {
      this.address = account
    },
  },
  getters: {
    getAddress: (state) => state.address,
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAccountStore, import.meta.hot))
}
