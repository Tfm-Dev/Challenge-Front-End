<template>
    <div class="text-center">
        <p v-if="$fetchState.pending"><b-icon-three-dots animation="cylon" font-scale="4"></b-icon-three-dots></p>
        <p v-else-if="$fetchState.error">An error occurred :(</p>
        <div v-else>
            <b-table id="dataTable" class="text-center" :filter="filter" :fields="fields" :items="items" :per-page="perPage" :current-page="currentPage" bordered @filtered="onFiltered">
                <template #cell(action)="data">
                    <NuxtLink :to="{ path: 'user', query: { token: data.item.login.uuid }}"><b-button variant="primary" @click="opened">Ver mais</b-button></NuxtLink>
                </template>
            </b-table>
            <b-pagination
                v-model="currentPage"
                pills
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="dataTable"
                class="mx-auto"
                align="center"
            >
                <template #first-text><span>&#60;&#60;</span></template>
                <template #prev-text><span>&#60;</span></template>
                <template #next-text><span>&#62;</span></template>
                <template #last-text><span>&#62;&#62;</span></template>
                <template #page="{ page, active }">
                    <b v-if="active">{{ page }}</b>
                    <i v-else>{{ page }}</i>
                </template>
            </b-pagination>
        </div>
    </div>
</template>
<script>
import { BTable, BButton, BIconThreeDots } from 'bootstrap-vue'
import { mapGetters } from 'vuex'

export default {
    name: 'CTable',
    components: { "b-table": BTable, "b-button": BButton, "b-icon-three-dots": BIconThreeDots },
    props: {
        filter: {
            Type: String,
            required: true,
            validator: (value) => {
                return (
                value !== null ||
                value.match('/([^1-9])w+/g') > 1
                )
            }
        }
    },
    data() {
        return {
            fields: [
                { key: "name", label: "Nome", formatter: 'fullName', sortable: true },
                { key: "gender", label: "Gênero", sortable: true },
                { key: "dob", label: "Aniversário", formatter: 'birth' },
                { key: "action", label: "Ação" }
            ],
            perPage: 10,
            currentPage: 1
        }
    },
    async fetch() {
        const result = await this.$axios.get("https://randomuser.me/api/?seed=94c025a0a1ca3503&page=1&results=50&noinfo")
        this.$store.commit('user/add', result.data.results)   
    },
    computed: {
        ...mapGetters({items: 'user/users'}),
        rows() {
            return this.items.length
        }
    },
    methods: {
        opened() {
            this.$store.commit('open')
        },
        fullName(value) {
            return `${value.first} ${value.last}`
        },
        birth(value) {
            const split = value.date.split('T')[0].split('-')
            return `${split[2]}/${split[1]}/${split[0]}`
        },
        onFiltered(filteredItems) {
            this.rows = filteredItems.length
            this.currentPage = 1
        }
    }
}
</script>
<style>
.up { margin-top: -75px; }
</style>