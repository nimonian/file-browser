<script setup>
import Node from "./Node.vue";
const props = defineProps(["files"]);
</script>

<template>
  <ul>
    <Node name="documents" :node="props.files" />
  </ul>
</template>
