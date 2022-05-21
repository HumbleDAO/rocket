import { loadAppContracts } from '../helpers/loadAppContracts'

export default function () {
  return useState('contractsConfig', () => {
    return loadAppContracts()
  })
}
