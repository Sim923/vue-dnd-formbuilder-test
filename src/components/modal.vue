<template>
<transition name="modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
          <slot name="header">
            Add Attributes
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            <div>
              <Label>placeholder</Label>
              <input type="text" v-model="placeholder" />
            </div>
            <div>
              <Label>size</Label>
              <input type="text" v-model="size" />
            </div>
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="modal-default-button" @click="$emit('addAttribute', {placeholder, size})">
              OK
            </button>
            <button class="modal-default-button" @click="$emit('close')">
              CANCEL
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</transition>
  
</template>

<script>
  export default {
    name: 'modal',
    data() {
      return {
        placeholder: null,
        size: 0,
      };
    },
    props: {
      placeholderprop: {
        type: String,
        default: null,
      },
      sizeprop: {
        type: Number,
        default: 0,
      },
    },
    methods: {
    },
    mounted() {
      this.placeholder = this.placeholderprop;
      this.size = this.sizeprop;
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }
  .modal-body {
    margin: 20px 0;
    height: 50px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .modal-default-button {
    float: right;
  }
  .modal-body div {
    display: flex;
    justify-content: space-between;
  }
</style>