<template>
  <v-app>
    <v-container>
      <HeaderApp />
      <FileUpload />
      <v-divider />
      <Vulnerabilities />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import HeaderApp from "./HeaderApp.vue";
import FileUpload from "./FileUpload.vue";
import Vulnerabilities from "./Vulnerabilities.vue";

export default {
  components: {
    HeaderApp,
    FileUpload,
    Vulnerabilities,
  },
  data() {
    return {
      file: "",
      fileContent: "",
      vulnerabilities: ""
    };
  },

  methods: {
    submitFile() {
      console.log("File content: ", this.content);
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      const reader = new FileReader();
      if (this.file.name.includes(".json")) {
        reader.onload = (res) => {
          this.fileContent = res.target.result;
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      } else {
        this.content = "check the console for file output";
        reader.onload = (res) => {
          console.log(res.target.result);
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      }
    },
  },
};
</script>
