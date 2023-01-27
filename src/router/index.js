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
  },
  {
    path: "/spot",
    component: spot,
  },
  {
    path: "/record",
    component: record,
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
