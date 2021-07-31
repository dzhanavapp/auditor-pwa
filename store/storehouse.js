import { SET_STORE } from './types'

export const state = () => ({
  data: null,
})

export const mutations = {
  [SET_STORE]: (state, store) => {
    state.data = store
  },
}
