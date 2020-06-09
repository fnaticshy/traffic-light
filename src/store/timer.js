export default {
  state: {
    order: [
      { name: "red", isActive: false },
      { name: "yellow", isActive: false },
      { name: "green", isActive: false }
    ],
    activeIndex: 0,
    reverse: false,
    timeouts: {
      red: 10000,
      yellow: 3000,
      green: 15000
    }
  },
  mutations: {
    changeActiveColor(state, payload) {
      state.order.find((element, index) => {
        if (element.name === payload) state.activeIndex = index;
      });
      state.order.forEach(el => {
        el.isActive = false;
      });

      let index = state.activeIndex;

      if (index < state.order.length && !state.reverse) {
        index = state.activeIndex + 1;
        state.reverse = index === state.order.length - 1 ? true : false;
      } else {
        index = state.activeIndex - 1;
        state.reverse = index === 0 ? false : true;
      }

      if (index === 3 && payload === "green") index = 1;
      state.order[index].isActive = true;
    },
    loadState(state, payload) {
      if (payload) {
        state.order.forEach(el => (el.isActive = false));
        state.order.forEach(el => {
          if (el.name === payload) el.isActive = true;
        });
      }
    },
    setActive(state, payload) {
      for (const el of state.order) {
        if (el.name === payload) {
          el.isActive = true;
        } else {
          el.isActive = false;
        }
      }
    }
  },
  actions: {
    changeActiveColor({ commit }, payload) {
      commit("changeActiveColor", payload);
    },
    setActive({ commit }, payload) {
      if (!payload.slice(1)) {
        commit("setActive", "red");
      } else {
        commit("setActive", payload.slice(1));
      }
    },
    saveState(ctx, payload) {
      localStorage.setItem("state", payload);
    },
    loadState({ commit }) {
      commit("loadState", localStorage.getItem("state"));
    }
  },
  getters: {
    redTimeout({ timeouts }) {
      return timeouts.red;
    },
    greenTimeout({ timeouts }) {
      return timeouts.green;
    },
    yellowTimeout({ timeouts }) {
      return timeouts.yellow;
    },
    timeouts({ timeouts }) {
      return timeouts;
    },
    getActiveColor({ order }) {
      let activeColor;
      order.forEach(el => {
        if (el.isActive === true) {
          activeColor = el.name;
        }
      });
      return activeColor;
    }
  }
};
