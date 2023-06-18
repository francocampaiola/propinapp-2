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
                    <v-col v-if="arr.length === 0">
                        <v-card-text>No hay propinas</v-card-text>
                    </v-col>
                    <v-col cols="12" v-for="propina in arr" :key="propina.id">
                        <v-card>
                            <v-card-title>Propina {{ propina.id }}</v-card-title>
                            <v-card-subtitle>Para {{ propina.persona }}</v-card-subtitle>
                            <v-card-text>
                                Monto: $ {{ propina.monto }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-card-title>Calculos realizados</v-card-title>
                    <v-col v-if="arr2.length === 0">
                        <v-card-text>No hay cálculos</v-card-text>
                    </v-col>
                    <v-col cols="12" v-for="calculo in arr2" :key="calculo.id">
                        <v-card>
                            <v-card-title>Cuenta</v-card-title>
                            <v-card-subtitle>Cuenta sin propina: $ {{ calculo.cuenta }}</v-card-subtitle>
                            <v-card-text>Porcentaje de propina: {{ calculo.porcentajePropina }} %</v-card-text>
                            <v-card-text>Cantidad de comensales: {{ calculo.personas }} persona(s)</v-card-text>
                            <v-card-text>
                                Propina por persona: $ {{ calculo.propinaPorPersona.toFixed(2) }}
                            </v-card-text>
                            <v-card-text>
                                Total por persona: $ {{ calculo.totalPorPersona.toFixed(2) }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ToggleTheme from '../components/ToggleTheme.vue';
import arrayService from '../utils/arrayService.js';

export default {
    name: 'HistoryView',
    data() {
        return {
            arr: [],
            arr2: []
        };
    },
    components: {
        ToggleTheme
    },
    computed: {
        arrayPropinas() {
            return arrayService.getArray();
        },
        arrayCalculos() {
            return arrayService.getArray();
        }
    },
    mounted: function () {
        const storedArray = localStorage.getItem('dato');
        const storedArray2 = localStorage.getItem('calculo');
        if (storedArray) {
            this.arr = JSON.parse(storedArray);
        }

        if (storedArray2) {
            this.arr2 = JSON.parse(storedArray2);
        }

    },
    methods: {
        // ...
    }
};
</script>