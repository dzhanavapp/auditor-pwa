import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'nuxt-user',
    paths: ['user', 'storehouse'],
  })(store)
}
