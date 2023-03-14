<script setup>
import FileSystem from "./components/FileSystem.vue";
import documents from "./files";

import useFileSystem from "./composables/fileSystem";
const fs = useFileSystem();
</script>

<template>
  <header>
    FileSystem
    <span class="material-icons-outlined user">account_circle</span>
  </header>
  <nav>
    <FileSystem :files="documents" />
  </nav>
  <main>
    {{ fs.file }}
  </main>
</template>
