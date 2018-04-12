<template>
  <drop @drop="handleDrop(...arguments)">
    <div class="dropzone" id="dropzone">
      <Item v-for="(row, index) in state.rows" v-on:remove="removeRow(index)" v-on:addAttribute="addAttribute" :key="row.key" :index="index" :row="row">
      </Item>
    </div>
  </drop>
</template>

<script>
import { Drag, Drop } from 'vue-drag-drop';
import store from '../store';

export default {
  components: { Drag, Drop },
  name: 'DropZone',
  data() {
    return {
    };
  },
  store: ['state'],
  methods: {
    handleDrop() {
      this.state.rows.push({ key: Date.now(), size: 0, placeholder: '' });
      store.setHtml();
    },
    removeRow(index) {
      this.state.rows.splice(index, 1);
      store.setHtml();
    },
    addAttribute(row) {
      this.state.rows.splice(row.index, 1, row);
      store.setHtml();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dropzone {
    width: 45vw;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
</style>
