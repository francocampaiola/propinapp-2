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
        <p class="text-p mt-5" v-if="arr.length === 0">No hay propinas dadas recientemente.</p>
        <div v-else>
            <p class="text-h6 mt-5">Hoy</p>
            <v-row>
                <v-col cols="12" md="6" lg="4" v-for="propina in arr" :key="propina.id">
                    <v-card max-width="344" v-if="propina.fechaPropina.Date === fechaActual.Date">
                        <v-card-title>Propina {{ propina.id }}</v-card-title>
                        <v-card-subtitle>Para {{ propina.persona }}</v-card-subtitle>
                        <v-card-text>
                            Monto: $ {{ propina.monto }}
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <p class="text-h6 mt-5">Ayer</p>
            <v-row>
                <v-col cols="12" md="6" lg="4" v-for="propina in arr" :key="propina.id">
                    <v-card max-width="344" v-if="isFechaAyer(propina.fechaPropina)">
                        <v-card-title>Propina {{ propina.id }}</v-card-title>
                        <v-card-subtitle>Para {{ propina.persona }}</v-card-subtitle>
                        <v-card-text>
                            Monto: $ {{ propina.monto }}
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>
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
                            <v-select label="Persona" v-model="persona" prepend-inner-icon="mdi-account" color="success"
                                :items="items">
                            </v-select>
                            <v-text-field label="Monto" v-model="monto" prepend-inner-icon="mdi-currency-usd"
                                color="success"></v-text-field>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text @click="closeDialogDar">
                                Volver
                            </v-btn>
                            <v-btn color="success" text @click="darPropina">
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
import arrayService from '../utils/arrayService.js';

export default {
    name: 'HomeView',
    components: {
        ToggleTheme
    },
    data() {
        return {
            fechaActual: new Date().toLocaleDateString(),
            balance: 1000,
            balanceAgregar: null,
            dialogDar: false,
            dialogAgregar: false,
            enviado: false,
            arr: [],
            persona: null,
            monto: null,
            fechaPropina: null,
            items: ['Persona 1', 'Persona 2', 'Persona 3', 'Persona 4'],
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
            this.dialogAgregar = false;
        },
        closeDialogDar: function () {
            this.dialogDar = false;
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
        guardarArray: function () {
            let arr = this.arr;
            arrayService.setArray(arr);
        },
        darPropina: function () {
            this.enviado = true;
            this.errores = [];

            if (!this.persona) {
                this.errores.push('Debe seleccionar una persona para dar la propina.');
            }

            if (!this.monto || isNaN(this.monto) || this.monto == 0) {
                this.errores.push('El monto no puede estar vacío y debe ser válido');
            }

            if (this.monto < 0) {
                this.errores.push('El monto debe ser mayor a 0');
            }

            if (this.monto > this.balance) {
                this.errores.push('Saldo insuficiente');
            }

            if (this.errores.length === 0) {
                this.fechaPropina = new Date();

                let nuevoObj = {
                    persona: this.persona,
                    monto: this.monto,
                    fechaPropina: this.fechaPropina
                };

                if (!localStorage.dato) {
                    this.arr = [];
                } else {
                    this.arr = JSON.parse(localStorage.dato);
                }

                this.arr.push(nuevoObj);
                localStorage.setItem("dato", JSON.stringify(this.arr));

                this.balance -= parseInt(this.monto);
                localStorage.setItem("balance", this.balance);

                this.guardarArray();

                this.dialogDar = false;
                this.persona = null;
                this.monto = null;
                this.enviado = false;
            } else {
                console.log(this.errores);
                this.persona = null;
                this.monto = null;
            }
        },
        isFechaAyer: function (fecha) {
            const fechaPropina = new Date(fecha);
            const fechaAyer = new Date();
            fechaAyer.setDate(fechaAyer.getDate() - 1);

            return fechaPropina.toDateString() === fechaAyer.toDateString();
        }
    },
    mounted: function () {
        if (!localStorage.balance) {
            localStorage.setItem('balance', this.balance);
        } else {
            this.balance = parseInt(localStorage.getItem("balance"));
        }

        this.arr = JSON.parse(localStorage.getItem("dato")) || [];
    }
}
</script>