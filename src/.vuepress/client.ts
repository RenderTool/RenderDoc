import { defineClientConfig, resolvers } from 'vuepress/client'
import chatmessage from "./components/chatmessage.vue";
import gifwithbutton from './components/gifwithbutton.vue';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("chatmessage", chatmessage);
    app.component('gifwithbutton', gifwithbutton);
      router.beforeEach((to) => {
          console.log('before navigation')
      })

      router.afterEach((to) => {
          console.log('after navigation')
      })
  },
  setup() {},
  layouts: {},
  rootComponents: [],
})

// import chatmessage from "./components/chatmessage.vue";
//
// import gifwithbutton from './components/gifwithbutton.vue';
// export default defineClientConfig({
//   enhance: ({ app, router, siteData }) => {
//     app.component("chatmessage", chatmessage);
//     app.component('gifwithbutton', gifwithbutton);
//   },
// });
