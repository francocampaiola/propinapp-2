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
import arrayService from '../utils/arrayService.js';

export default {
    name: 'HistoryView',
    data() {
        return {
            arr: []
        };
    },
    components: {
        ToggleTheme
    },
    computed: {
        arrayPropinas() {
            return arrayService.getArray();
        }
    },
    mounted: function () {
        const storedArray = localStorage.getItem('dato');
        if (storedArray) {
            this.arr = JSON.parse(storedArray);
        }
    },
    methods: {
        // ...
    }
};
</script>