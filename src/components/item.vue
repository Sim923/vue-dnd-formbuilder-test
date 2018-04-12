<template>
  <div class="main">
    <div class="field">
      <div class="control">
        <div title="remove" v-on:click= "remove">x</div>
        <div title="add attribute" v-on:click="showModal = true">+</div>
      </div>
      <input type="text" :size="row.size" :placeholder="row.placeholder" />
    </div>
    <modal v-if="showModal" @close="showModal = false" @addAttribute="addAttribute" :sizeprop="row.size" :placeholderprop="row.placeholder"/>
  </div>
</template>

<script>
import { Drag, Drop } from 'vue-drag-drop';

export default {
  components: { Drag, Drop },
  name: 'Item',
  props: {
    index: {
      type: Number,
      default: 0,
    },
    row: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    remove() {
      this.$emit('remove');
    },
    addAttribute(attributes) {
      this.showModal = false;
      this.row.size = Number(attributes.size);
      this.row.placeholder = attributes.placeholder;
      this.$emit('addAttribute', { index: this.index, size: this.row.size, placeholder: this.row.placeholder });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input {
    height: 30px;
    font-size: 20px;
    cursor: pointer;
  }
  .field {
    width: calc( 30vw + 40px );
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .field:hover {
    border: 1px solid grey;
  }
  .field .control {
    display: none;
  }
  .field .control div {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
  .field:hover .control {
    display: flex;
    flex-direction: row;
  }
</style>
