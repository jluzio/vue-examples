
const getters = {
  isLoggedIn: state => state.auth.isLoggedIn,
  getToken: state => state.auth.token,
  username: state => state.auth.username
}
export default getters
