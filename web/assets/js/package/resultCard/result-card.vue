<template>
  <div>
      <p>id: {{ page.id }} - package name: {{ page.name }}</p>
  </div>
</template>

<script>
export default {
    props: [ 'page' ]
}
</script>

<style>
div {
    margin: 20px;
    border: 1px dashed rebeccapurple;
}
</style>