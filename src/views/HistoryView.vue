<template>
    <v-container>
        <v-app-bar color="transparent" flat>
            <v-app-bar-title>Historial</v-app-bar-title>
            <v-spacer></v-spacer>
            <ToggleTheme />
        </v-app-bar>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>Propinas dadas</v-card-title>
                    <v-card>
                        <v-card-text>Propina 1</v-card-text>
                    </v-card>
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-card-title>Cálculos realizados</v-card-title>
                    <v-card>
                        <v-card-text>Cálculo 1</v-card-text>
                    </v-card>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ToggleTheme from '../components/ToggleTheme.vue';
export default {
    name: 'HistoryView',
    data() {
        return {
            //
        }
    },
    components: {
        ToggleTheme
    }
}
</script>