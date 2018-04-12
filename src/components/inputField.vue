<template>
  <div class="main">
    <drag>
      <input type="text" placeholder="Drag Me" readonly/>
    </drag>
  </div>
</template>

<script>
import { Drag, Drop } from 'vue-drag-drop';

export default {
  components: { Drag, Drop },
  name: 'InputField',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input {
    width: 30vw;
    height: 30px;
    font-size: 20px;
    cursor: pointer;
  }
</style>
