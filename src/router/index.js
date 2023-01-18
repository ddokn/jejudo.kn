import { createWebHistory, createRouter } from "vue-router";
import home from '../components/HomeView.vue'
import food from '../views/FoodList.vue'
import spot from '../views/SpotList.vue'
import record from '../views/RecordList.vue'


const routes = [
  {
    path: "/",
    component: home,
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
