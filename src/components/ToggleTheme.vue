<template>
    <v-btn
          icon id="mode-switcher"
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <v-icon :color="($vuetify.theme.dark) ? 'teal accent-4' : 'teal darken-4'">
            {{ ($vuetify.theme.dark) ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
          </v-icon>
        </v-btn>
</template>

<script>
export default {
    name: 'ToggleTheme',
}
</script>