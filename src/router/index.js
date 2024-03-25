import { createWebHistory, createRouter } from "vue-router";
import home from '../components/HomeView.vue'
import food from '../views/FoodList.vue'
import spot from '../views/SpotList.vue'
import record from '../views/RecordList.vue'
import login from '../views/KakaoLogin.vue'

const routes = [
  {
    path: "/",
    component: home,
    props: true
  },
  {
    path: "/food",
    component: food,
    props: true
  },
  {
    path: "/spot",
    component: spot,
    props: true
  },
  {
    path: "/record",
    component: record,
    props: true
  },
  {
    path: "/login",
    component: login,
    props: true
  }
];

const router = createRouter ({
  history: createWebHistory(),
  routes,
  scrollBehavior(){
    return { top: 0 }
  },
});

export default router; 
