<template>
    <div class="text-center">
        <p v-if="$fetchState.pending"><b-icon-three-dots animation="cylon" font-scale="4"></b-icon-three-dots></p>
        <p v-else-if="$fetchState.error">An error occurred :(</p>
        <div v-else>
            <b-table id="dataTable" class="text-center" :filter="filter" :fields="fields" :items="items" bordered>
                <template #cell(action)="data">
                    <NuxtLink :to="'/user?token=' + data.item.login.uuid"><b-button variant="primary" @click="opened">Ver mais</b-button></NuxtLink>
                </template>
            </b-table>
            <a id="load" v-b-hover="hoverHandler" :href="'#page' + currentPage" @click="loadMore">
                <b-icon-arrow-clockwise v-if="isHover" animation="spin"></b-icon-arrow-clockwise>
                <b-icon-arrow-clockwise v-else></b-icon-arrow-clockwise>
                Loading more
            </a>
        </div>
    </div>
</template>
<script>
import { BTable, BButton, BIconThreeDots, BIconArrowClockwise } from 'bootstrap-vue'
import { mapGetters } from 'vuex'

export default {
    name: 'CTable',
    components: { "b-table": BTable, "b-button": BButton, "b-icon-three-dots": BIconThreeDots, "b-icon-arrow-clockwise": BIconArrowClockwise },
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
            isHover: false,
            currentPage: 1
        }
    },
    async fetch() {
        const result = await this.$axios.get("https://randomuser.me/api/?seed=94c025a0a1ca3503&page=1&results=10&noinfo")
        this.$store.commit('user/add', result.data.results)   
    },
    computed: {
        ...mapGetters({items: 'user/users'})
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
        hoverHandler(isHovered) {
            this.isHover = isHovered
        },
        async loadMore() {
            this.currentPage += 1
            const result = await this.$axios.get("https://randomuser.me/api/?seed=94c025a0a1ca3503&page="+ this.currentPage +"&results=10&noinfo")
            this.$store.commit('user/push', result.data.results)
        }
    }
}
</script>
<style>
.up { margin-top: -75px; }
#load { padding: 20px; text-decoration: none; color: black; }
</style>