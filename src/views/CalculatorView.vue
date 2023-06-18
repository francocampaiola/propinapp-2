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
                                <v-text-field solo prepend-inner-icon="mdi-currency-usd" color="success" type="number"
                                    v-model="cuenta"></v-text-field>
                            </div>
                            <div>
                                <div class="text-body-1 caption mb-2">Seleccione la propina</div>
                                <v-col>
                                    <v-row class="pa-2">
                                        <v-btn-toggle v-model="porcentajePropina" required color="#00BFA5">
                                            <v-btn x-large size="lg" class="me-2" value="5">5%</v-btn>
                                            <v-btn x-large class="me-2" value="10">10%</v-btn>
                                            <v-btn x-large value="15">15%</v-btn>
                                        </v-btn-toggle>
                                    </v-row>
                                </v-col>
                            </div>
                            <div class="mt-5">
                                <div class="text-body-1 caption mb-2">Personas</div>
                                <v-text-field solo prepend-inner-icon="mdi-account" color="success" type="number"
                                    v-model="personas"></v-text-field>
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
                                                <div class="text-end text-h5 caption mb-2">$ {{ propinaPorPersona }}</div>
                                            </v-col>
                                        </v-row>
                                        <v-row class="align-center mx-auto">
                                            <v-col>
                                                <div class="text-body-1 caption mb-2">Total</div>
                                                <div class="text-body-2 caption mb-2">/ persona</div>
                                            </v-col>
                                            <v-col>
                                                <div class="text-end text-h5 caption mb-2">$ {{ totalPorPersona }}</div>
                                            </v-col>
                                        </v-row>
                                    </div>
                                    <div v-if="hayErrores">
                                        <div class="alert alert-danger py-1" v-for="error in errores" :key="error.id">
                                            <v-alert type="error">{{ error }}</v-alert>
                                        </div>
                                    </div>
                                    <div>
                                        <v-btn block class="mb-3" @click="calcular">Calcular</v-btn>
                                        <v-btn block @click="limpiar">Limpiar</v-btn>
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
import arrayService from '../utils/arrayService';
export default {
    name: 'CalculatorView',
    data() {
        return {
            cuenta: null,
            porcentajePropina: null,
            personas: null,
            propinaPorPersona: 0,
            totalPorPersona: 0,
            arr: [],
            errores: []
        }
    },
    computed: {
        hayErrores: function () {
            return this.errores.length;
        },
    },
    components: {
        ToggleTheme
    },
    methods: {
        guardarArray: function () {
            let arr = this.arr;
            arrayService.setArray(arr);
        },
        calcular: function () {
            this.errores = [];

            if (!this.cuenta || this.cuenta <= 0 || isNaN(this.cuenta)) {
                this.errores.push('El total de la cuenta es requerido y debe ser válido.');
            }

            if (!this.porcentajePropina) {
                this.errores.push('El porcentaje de propina es requerido.');
            }

            if (!this.personas || this.personas <= 0 || isNaN(this.personas)) {
                this.errores.push('La cantidad de comensales es requerida y debe ser válida.');
            }

            if (this.errores.length === 0) {
                let nuevoObj = {
                    cuenta: this.cuenta,
                    porcentajePropina: this.porcentajePropina,
                    personas: this.personas,
                    propinaPorPersona: (parseInt(this.cuenta) * parseInt(this.porcentajePropina)) / 100,
                    totalPorPersona: (parseInt(this.cuenta) + parseInt(this.propinaPorPersona)) / parseInt(this.personas)
                }

                if (!localStorage.calculo) {
                    this.arr = [];
                } else {
                    this.arr = JSON.parse(localStorage.getItem('calculo'));
                }

                this.arr.push(nuevoObj);
                localStorage.setItem('calculo', JSON.stringify(this.arr));

                this.guardarArray();

                this.propinaPorPersona = nuevoObj.propinaPorPersona.toFixed(2);
                this.totalPorPersona = nuevoObj.totalPorPersona.toFixed(2);
            } else {
                console.log(this.errores);
            }
        },
        limpiar: function () {
            this.errores = [];
            this.cuenta = null;
            this.porcentajePropina = null;
            this.personas = null;
            this.propinaPorPersona = 0;
            this.totalPorPersona = 0;
        }
    }
}
</script>