<template>
    <v-container>
        <v-app-bar color="transparent" flat>
            <v-app-bar-title>Calculadora</v-app-bar-title>
            <v-spacer></v-spacer>
            <ToggleTheme />
        </v-app-bar>
        <v-container>
            <v-card width="755" class="d-flex align-center mx-auto justify-center mb-6 rounded-lg mt-10">
                <v-row>
                    <v-col>
                        <v-container>
                            <div>
                                <div class="text-body-1 caption mb-2">Cuenta
                                </div>
                                <v-text-field solo prepend-inner-icon="mdi-currency-usd" color="success"
                                    type="number"></v-text-field>
                            </div>
                            <div>
                                <div class="text-body-1 caption mb-2">Seleccione la propina</div>
                                <v-col>
                                    <v-row class="pa-2">
                                        <v-btn-toggle v-model="propina" color="#00BFA5">
                                            <v-btn x-large size="lg" class="me-2">5%</v-btn>
                                            <v-btn x-large class="me-2">5%</v-btn>
                                            <v-btn x-large>5%</v-btn>
                                        </v-btn-toggle>
                                    </v-row>
                                </v-col>
                            </div>
                            <div class="mt-5">
                                <div class="text-body-1 caption mb-2">Personas</div>
                                <v-text-field solo prepend-inner-icon="mdi-account" color="success"
                                    type="number"></v-text-field>
                            </div>
                        </v-container>
                    </v-col>
                    <v-col>
                        <v-container>
                            <v-card color="teal accent-4" min-height="400">
                                <v-container>
                                    <div class="mb-16">
                                        <v-row class="mt-5 align-center mx-auto">
                                            <v-col>
                                                <div class="text-body-1 caption mb-2">Propina</div>
                                                <div class="text-body-2 caption mb-2">/ persona</div>
                                            </v-col>
                                            <v-col>
                                                <div class="text-end text-h5 caption mb-2">$0</div>
                                            </v-col>
                                        </v-row>
                                        <v-row class="align-center mx-auto">
                                            <v-col>
                                                <div class="text-body-1 caption mb-2">Propina</div>
                                                <div class="text-body-2 caption mb-2">/ persona</div>
                                            </v-col>
                                            <v-col>
                                                <div class="text-end text-h5 caption mb-2">$0</div>
                                            </v-col>
                                        </v-row>
                                    </div>
                                    <div>
                                        <v-btn block class="mb-3">Calcular</v-btn>
                                        <v-btn block>Limpiar</v-btn>
                                    </div>
                                </v-container>
                            </v-card>
                        </v-container>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </v-container>
</template>

<script>
import ToggleTheme from '../components/ToggleTheme.vue';
export default {
    name: 'CalculatorView',
    data() {
        return {
            propina: 0
        }
    },
    components: {
        ToggleTheme
    }
}
</script>