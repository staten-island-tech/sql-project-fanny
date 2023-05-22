import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
  }),
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
  actions: {
    async fetchUsers() {
      try {
        const data = fetch("./api/some.json");
        this.users = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
