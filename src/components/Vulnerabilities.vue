<template>
  <v-container v-if="vulnerabilities.id">
    <v-card class="mx-auto">
      <v-list density="compact">
        <v-list-subheader>General Info</v-list-subheader>
        <v-list-item color="primary">
          <template #prepend>
            <v-text :style="{ minWidth: '240px' }">
              ID
            </v-text>
          </template>
          <v-list-item-title>{{ vulnerabilities.id }}</v-list-item-title>
        </v-list-item>
        <v-list-item color="primary">
          <template #prepend>
            <v-text :style="{ minWidth: '240px' }">
              Summary
            </v-text>
          </template>
          <v-list-item-title>{{ vulnerabilities.summary }}</v-list-item-title>
        </v-list-item>
        <v-list-item color="primary">
          <template #prepend>
            <v-text :style="{ minWidth: '240px' }">
              Details
            </v-text>
          </template>
          <v-list-item-title>{{ vulnerabilities.details }}</v-list-item-title>
        </v-list-item>
        <v-list-item color="primary">
          <template #prepend>
            <v-text :style="{ minWidth: '240px' }">
              Modified
            </v-text>
          </template>
          <v-list-item-title>{{ vulnerabilities.modified }}</v-list-item-title>
        </v-list-item>
        <v-list-item color="primary">
          <template #prepend>
            <v-text :style="{ minWidth: '240px' }">
              Published
            </v-text>
          </template>
          <v-list-item-title>{{ vulnerabilities.published }}</v-list-item-title>
        </v-list-item>
        <v-list-item color="primary">
          <template #prepend>
            <v-text :style="{ minWidth: '240px' }">
              Schema Version
            </v-text>
          </template>
          <v-list-item-title>{{ vulnerabilities.schema_version }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card
      class="mx-auto"
      :style="{ marginTop: '24px' }"
    >
      <v-list density="compact">
        <v-list-subheader>References</v-list-subheader>
        <v-list-item color="primary">
          <template #prepend>
            <v-text :style="{ minWidth: '240px' }">
              Type
            </v-text>
          </template>
          <v-list-item-title>{{ vulnerabilities.references[0].type }}</v-list-item-title>
        </v-list-item>
        <v-list-item color="primary">
          <template #prepend>
            <v-text :style="{ minWidth: '240px' }">
              Url
            </v-text>
          </template>
          <v-list-item-title>{{ vulnerabilities.references[0].url }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
defineProps({
  vulnerabilities: {
    type: Object,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {},
  },
});
</script>
