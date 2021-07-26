import { SET_USER, LOGIN_USER } from './types'

export const state = () => ({
  data: {
    token: 'asd',
  },
})

export const mutations = {
  [SET_USER]: (state, user) => {
    state.data = user
  },
}

export const actions = {
  async [LOGIN_USER]({ commit }, { login, password }) {
    try {
      const user = await this.$axios.$get(
        `/api/mob_auditor/auth/?login=${login}&password=${password}`
      )
      commit(SET_USER, user)
      console.log(user, 'USER')
    } catch (error) {
      const errorMessage = error?.response?.data || 'Ошибка авторизации'
      this._vm.$toast.error(errorMessage)
      console.log('Ошибка авторизации')
    }
  },
}
