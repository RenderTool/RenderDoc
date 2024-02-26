// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
// @ts-ignore
import chatmessage from "./components/chatmessage.vue";
// @ts-ignore
import gifwithbutton from './components/gifwithbutton.vue';
export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("chatmessage", chatmessage);
    app.component('gifwithbutton', gifwithbutton);
  },
});
