import Vue from 'vue'
const ShortKey = require('vue-shortkey')

Vue.use(ShortKey, { prevent: ['.no-shortkey'] })
export default ShortKey
