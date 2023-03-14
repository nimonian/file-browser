<script setup>
import { ref } from "vue";
import useFileSystem from "../composables/fileSystem";

const props = defineProps({
  node: {
    type: Object,
    default: null,
  },
  name: {
    type: String,
    default: "",
  },
});

const isDir = props.node.type === "directory";
const open = ref(false);
const fs = useFileSystem();

function handleClick() {
  if (isDir) {
    open.value = !open.value;
    return;
  }
  fs.openFile(props.name);
}
</script>

<template>
  <li @click.stop="handleClick()">
    <div class="node-label">
      <span class="material-icons-outlined">
        {{
          !isDir ? "insert_drive_file" : open ? "expand_more" : "chevron_right"
        }}
      </span>
      {{ props.name }}
    </div>
    <ul v-if="isDir && open">
      <Node
        v-for="[name, node] in Object.entries(props.node.children)"
        :key="name"
        :name="name"
        :node="node"
      />
    </ul>
  </li>
</template>
