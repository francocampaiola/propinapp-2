<template>
    <v-container>
        <v-app-bar color="transparent" flat="false">
            <v-spacer></v-spacer>
            <v-row align="center">
                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <ToggleTheme />
                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
            </v-row>
        </v-app-bar>
    </v-container>
</template>

<script>
import ToggleTheme from '../components/ToggleTheme.vue';
export default {
    name: 'HomeView',
    components: {
        ToggleTheme
    },
    data() {
        return {
            //
        }
    },
}
</script>