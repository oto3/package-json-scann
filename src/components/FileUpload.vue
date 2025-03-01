<template>
  <v-container class="d-flex flex-wrap">
    <v-file-input
      id="file"
      ref="file"
      label="Select your package.json file"
      type="file"
      variant="underlined"
      @:change="$emit('uploadFile', $refs.file.files[0])"
    />
    <v-btn
      :style="{ margin: '12px'}"
      variant="outlined"
      @:click="$emit('submitFile')"
    >
      Submit
    </v-btn>
  </v-container>
</template>
<script lang="ts">
export default {
emits: ['uploadFile', 'submitFile'],
}
</script>
