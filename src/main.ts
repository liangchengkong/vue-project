import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { cellGroupProps, Tabbar, TabbarItem } from 'vant';

import App from './App.vue'
import router from './router'
import { Button } from 'vant';
import { Checkbox,Form,Field, CellGroup ,Cell,Search,Tab,Tabs,Swipe,SwipeItem,NavBar,Image,Icon,Tag} from 'vant';






const app = createApp(App)
app.use(Search);
app.use(Tab);
app.use(Tabs);
app.use(Swipe);
app.use(SwipeItem);
app.use(NavBar);
app.use(Button);
app.use(createPinia())
app.use(router)
app.use(Tabbar);
app.use(TabbarItem);
app.use(Field);
app.use(Form);
app.use(CellGroup);
app.use(Checkbox);
app.use(Image);
app.use(Tag);
app.use(Cell);
app.use(Icon);
app.mount('#app')
