<template>
  <div class="main">
    <div class="elements">
      <InputField />
    </div>
    <div class="form">
      <tabs>
        <tab name="Builder">
          <DropZone />
        </tab>
        <tab name="View HTML">
          <ViewHtml />
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContainer',
  data() {
    return {
      msg: 'Welcome',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .elements {
    width: 45vw;
    height: 80vh;
    border: 1px solid black;
    margin-left: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
