// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
// @ts-ignore
import ChatMessage from "./components/ChatMessage.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("ChatMessage", ChatMessage);
  },
});
