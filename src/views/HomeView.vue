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
                <template>
                    <div class="text-center">
                        <v-dialog v-model="dialogAgregar" width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn v-on="true ? on : null" v-bind="attrs" color="teal accent-4">
                                    Agregar dinero
                                </v-btn>
                            </template>

                            <v-card>
                                <v-card-title class="text-h5 lighten-2">
                                    Agregar dinero
                                </v-card-title>

                                <v-card-text>
                                    <v-text-field label="Monto"></v-text-field>
                                </v-card-text>

                                <v-divider></v-divider>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn text @click="closeDialogAgregar">
                                        Volver
                                    </v-btn>
                                    <v-btn color="success" text @click="dialog = false">
                                        Agregar
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </template>

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
        <template>
            <div class="text-center">
                <v-dialog v-model="dialogDar" width="500">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn fab color="teal accent-4" fixed right bottom v-on="true ? on : null" v-bind="attrs">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </template>

                    <v-card>
                        <v-card-title class="text-h5 lighten-2">
                            Dar propina
                        </v-card-title>

                        <v-card-text>
                            <v-select label="Persona"></v-select>
                            <v-text-field label="Monto"></v-text-field>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text @click="closeDialogDar">
                                Volver
                            </v-btn>
                            <v-btn color="success" text @click="dialog = false">
                                Dar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </template>
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
            dialogDar: false,
            dialogAgregar: false,
        }
    },
    methods: {
        closeDialogAgregar() {
            this.dialogAgregar = false
        },
        closeDialogDar() {
            this.dialogDar = false
        }
    }
}
</script>