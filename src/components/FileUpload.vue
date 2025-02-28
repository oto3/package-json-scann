<template>
  <v-container class="d-flex flex-wrap">
    <v-file-input
      id="file"
      ref="file"
      label="Select your package.json file"
      type="file"
      variant="underlined"
      @:change="handleFileUpload()"
    />
    <v-btn
      :style="{ margin: '12px'}"
      variant="outlined"
      @:click="submitFile()"
    >
      Submit
    </v-btn>
  </v-container>
</template>
