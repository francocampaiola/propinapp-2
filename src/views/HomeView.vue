<template>
    <v-container>
        <v-app-bar color="transparent" flat>
            <v-app-bar-title>¡Hola de nuevo, Franco!</v-app-bar-title>
            <v-spacer></v-spacer>
            <ToggleTheme />
        </v-app-bar>
        <v-card class="d-flex align-center" min-height="150px">
            <v-card-text>
                <div>Tu balance actual:</div>
                <p class="text-h4 text--primary">
                    $ 1,000.00
                </p>
            </v-card-text>
            <v-card-actions>
                <v-btn color="teal accent-4">
                    Agregar dinero
                </v-btn>
            </v-card-actions>
        </v-card>
        <p class="text-h4 mt-5">Propinas dadas recientemente</p>
        <p class="text-h6 mt-5">Hoy</p>
        <v-row>
            <v-col cols="12" md="6" lg="4" v-for="n in 3" :key="n">
                <v-card class="mx-auto" max-width="344">
                    <v-card-title>Card {{ n }}</v-card-title>
                    <v-card-subtitle>Subtitle</v-card-subtitle>
                    <v-card-text>
                        Lorem ipsum dolor sit amet,
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <p class="text-h6 mt-5">Ayer</p>
        <v-row>
            <v-col cols="12" md="6" lg="4" v-for="n in 3" :key="n">
                <v-card class="mx-auto" max-width="344">
                    <v-card-title>Card {{ n }}</v-card-title>
                    <v-card-subtitle>Subtitle</v-card-subtitle>
                    <v-card-text>
                        Lorem ipsum dolor sit amet,
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
                <v-btn fab color="teal accent-4" fixed right bottom v-on="true ? on :null" v-bind="attrs">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
            <span>Dar propina</span>
        </v-tooltip>
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