<template>
    <v-container>
        <v-app-bar color="transparent" flat>
            <v-app-bar-title>Acerca de</v-app-bar-title>
            <v-spacer></v-spacer>
            <ToggleTheme />
        </v-app-bar>
        <v-container>
            <v-card class="text-center">
                <v-card-text>
                    <p class="text-h4 text--primary">
                        Propinapp
                    </p>
                    <p>v1.0.0</p>
                    <div>Franco Campaiola</div>
                    <div>Aplicaciones para Dispositivos Móviles</div>
                    <div>2023 ©</div>
                </v-card-text>
            </v-card>
        </v-container>
    </v-container>
</template>

<script>
import ToggleTheme from '../components/ToggleTheme.vue';
export default {
    name: 'AboutView',
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