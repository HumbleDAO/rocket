const contractListPromise = import('../contracts/hardhat_contracts.json')
// @ts-ignore
const externalContractsPromise = import('../contracts/external_contracts')

export const loadAppContracts = async () => {
  const config: any = {
    deployedContracts: null,
    externalContracts: null,
  }
  config.deployedContracts = (await contractListPromise).default ?? {}
  config.externalContracts = (await externalContractsPromise).default ?? {}
  return config
}
