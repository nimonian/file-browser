import { reactive } from "vue";

const fs = reactive({
  file: "",
  openFile(file) {
    this.file = file;
  },
});

export default function useFileSystem() {
  return fs;
}
