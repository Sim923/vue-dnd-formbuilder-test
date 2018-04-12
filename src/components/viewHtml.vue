<template>
  <div class="htmlview">
    <pre>{{state.html}}</pre>
  </div>
</template>

<script>
export default {
  name: 'ViewHtml',
  data() {
    return {
    };
  },
  store: ['state'],
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .htmlview {
    width: 45vw;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
</style>
