<template>
  <div>
    <!-- TODO: remove -->
    <div>
      <label for="address">{{ address }}</label>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/account'

const { $web3ModalSetup } = useNuxtApp()
// const web3Modal = $web3ModalSetup()
const accountStore = useAccountStore()
const { address } = storeToRefs(accountStore)

// onMounted(() => {
//   const provider = web3Modal()
//   provider.on('accountsChanged', (accounts) => {
//     accountStore.setAddress(accounts[0])
//   })
// })
</script>
