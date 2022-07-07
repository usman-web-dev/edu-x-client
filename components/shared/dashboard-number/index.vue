<template>
  <div class="d-flex flex-column align-center justify-center fill-height">
    <span class="text-h5 font-weight-medium grey--text">{{ text }}</span>
    <span class="text-h3 font-weight-bold secondary--text">{{ number }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    number: [String, Number]
  }
};
</script>
