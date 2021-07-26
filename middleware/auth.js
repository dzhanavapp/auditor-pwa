export default function ({ store, redirect }) {
  if (!store.state.user?.data) {
    redirect(302, '/login')
  }
}
