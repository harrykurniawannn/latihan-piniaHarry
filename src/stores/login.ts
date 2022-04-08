import { defineStore } from "pinia";

type user = {
  name: string;
  email: string;
};

type login = {
  loggedIn: boolean;
  user: user | null;
};

export const useLoginStore = defineStore({
  id: "auth",
  state: (): login => ({
    loggedIn: false,
    user: null,
  }),
  actions: {
    login(email: string, password: string) {
      if (email === "harry@gmail.com" && password === "harbun") {
        this.loggedIn = true;
        this.user = {
          name: "Harry Kurniawan",
          email,
        };

        return true;
      }
      return false;
    },
    logout() {
      this.loggedIn = false;
      this.user = null;
    },
  },
});
