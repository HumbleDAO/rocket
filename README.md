# 🏗 rocket-dapp (scaffold-eth X vue3 X nuxt3)

Inspired by [scaffold-eth](https://github.com/scaffold-eth/scaffold-eth)

### Buidl With

[Nuxt 3](https://v3.nuxtjs.org/)
[Vue 3](https://vuejs.org/guide/introduction.html)
[Hardhat](https://hardhat.org/getting-started/)

# 🏄‍♂️ Quick Start

Prerequisites: [Node (v16 LTS)](https://nodejs.org/en/download/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)

> clone

```bash
git clone https://github.com/HumbleDAO/rocket.git
```

> install and start your 👷‍ Hardhat chain:

```bash
cd rocket-dapp
yarn install
yarn chain
```

> in a second terminal window, start your 📱 frontend:

```bash
cd rocket-dapp
yarn start
```

> in a third terminal window, 🛰 deploy your contract:

```bash
cd rocket-dapp
yarn deploy
```

🔏 Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`

📝 Edit your frontend `App.jsx` in `packages/nuxt-app`

💼 Edit your deployment scripts in `packages/hardhat/deploy`

📱 Open http://localhost:3000 to see the app

# 🔭 Learning Solidity

📕 Read the docs: https://docs.soliditylang.org

📚 Go through each topic from [solidity by example](https://solidity-by-example.org) editing `YourContract.sol` in **🏗 scaffold-eth**

- [Primitive Data Types](https://solidity-by-example.org/primitives/)
- [Mappings](https://solidity-by-example.org/mapping/)
- [Structs](https://solidity-by-example.org/structs/)
- [Modifiers](https://solidity-by-example.org/function-modifier/)
- [Events](https://solidity-by-example.org/events/)
- [Inheritance](https://solidity-by-example.org/inheritance/)
- [Payable](https://solidity-by-example.org/payable/)
- [Fallback](https://solidity-by-example.org/fallback/)

📧 Learn the [Solidity globals and units](https://docs.soliditylang.org/en/latest/units-and-global-variables.html)

# 💌 P.S.

🌍 You need an RPC key for testnets and production deployments, create an [Alchemy](https://www.alchemy.com/) account and replace the value of `ALCHEMY_KEY = xxx` in `packages/react-app/src/constants.js` with your new key.

📣 Make sure you update the `InfuraID` before going into production
