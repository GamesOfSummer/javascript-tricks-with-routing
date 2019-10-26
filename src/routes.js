// import components for routing
import PageZero from './components/Page0.vue'
import PageOne from './components/Page1.vue'
import PageTwo from './components/Page2.vue'
import PageThree from './components/Page3.vue'
import Regex from './components/Regex.vue'
import Home from './components/Home.vue'

// set up router
export default [
  { path: '/Page0', component: PageZero },
  { path: '/Page1', component: PageOne },
  { path: '/Page2/', component: PageTwo },
  { path: '/Page3/', component: PageThree },
  { path: '/Regex', component: Regex },
  { path: '/Home/', component: Home }
]
