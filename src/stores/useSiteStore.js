import { defineStore } from "pinia";

export const useSiteStore = defineStore({
  id: "store",
  state: () => ({
    title: ["admin"],
  }),
  getters: {
    title: (state) => state.title,
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    // increment() {
    //   this.counter++;
    // },
  },
});
