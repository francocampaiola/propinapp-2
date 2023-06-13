<template>
    <v-card height="100%">
        <v-navigation-drawer absolute permanent left width="200px">
            <template v-slot:prepend>
                <v-list-item>
                    <v-list-item-content>
                        <v-img class="mx-2" src="logo.png" max-height="40" max-width="100" contain></v-img>
                    </v-list-item-content>
                </v-list-item>
            </template>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <template v-slot:append>
                <v-list dense nav>
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-information</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Acerca de</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </template>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
    name: 'Menu',
    data() {
        return {
            items: [
                { title: 'Inicio', icon: 'mdi-home-city' },
                { title: 'Historial', icon: 'mdi-history' },
                { title: 'Calculadora', icon: 'mdi-calculator' }
            ],
        }
    },
}
</script>
