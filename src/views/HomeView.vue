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
                    $ {{ balance }}
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
                                    <v-text-field label="Monto" prepend-inner-icon="mdi-currency-usd" color="success"
                                        v-model="balanceAgregar"></v-text-field>
                                </v-card-text>

                                <v-divider></v-divider>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn text @click="closeDialogAgregar">
                                        Volver
                                    </v-btn>
                                    <v-btn color="success" text @click="agregarDinero">
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
                <v-card max-width="344">
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
                <v-card max-width="344">
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
                            <v-select label="Persona" prepend-inner-icon="mdi-account" color="success"></v-select>
                            <v-text-field label="Monto" prepend-inner-icon="mdi-currency-usd"
                                color="success"></v-text-field>
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
            balance: 1000,
            balanceAgregar: null,
            dialogDar: false,
            dialogAgregar: false,
            enviado: false,
            errores: [],
        }
    },
    computed: {
        hayErrores() {
            return this.errores.length;
        }
    },
    methods: {
        closeDialogAgregar: function () {
            this.dialogAgregar = false
        },
        closeDialogDar: function () {
            this.dialogDar = false
        },
        agregarDinero: function () {
            this.enviado = true;
            this.errores = [];

            if (!this.balanceAgregar || isNaN(this.balanceAgregar) || this.balanceAgregar == 0) {
                this.errores.push('El monto no puede estar vacío y debe ser válido');
            }

            if (this.balanceAgregar < 0) {
                this.errores.push('El monto debe ser mayor a 0');
            }

            if (this.errores.length === 0) {
                this.balance += parseInt(this.balanceAgregar);
                this.dialogAgregar = false;
                this.balanceAgregar = null;
                this.enviado = false;
            } else {
                this.balanceAgregar = null;
                console.log(this.errores);
            }

            if (!localStorage.balance) {
                localStorage.setItem('balance', this.balance);
            } else {
                localStorage.balance = this.balance;
            }

            localStorage.setItem("balance", this.balance);
        },
        darPropina: function () {

        }
    },
    mounted: function () {
        this.balance = parseInt(localStorage.getItem("balance")) || parseInt(1000);
    }
}
</script>