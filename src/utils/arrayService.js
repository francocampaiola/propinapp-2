import Vue from 'vue';

export default new Vue({
  data() {
    return {
      arr: []
    };
  },
  methods: {
    setArray(newArray) {
      this.arr = newArray;
    },
    getArray() {
      return this.arr;
    }
  }
});
