import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    role: "user1",
  }),
  actions: {
    setUserRole(role) {
      console.log("setUserRole action:", role);
      this.role = role;
    },
  },
});
