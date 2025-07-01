import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Tabbar, TabbarItem } from 'vant';

import App from './App.vue'
import router from './router'
import { Button } from 'vant';
import { Checkbox,Form,Field, CellGroup } from 'vant';






const app = createApp(App)
app.use(Button);
app.use(createPinia())
app.use(router)
app.use(Tabbar);
app.use(TabbarItem);
app.use(Field);
app.use(Form);
app.use(CellGroup);
app.use(Checkbox);
app.mount('#app')
