<template>
    <div>
        <b-table class="text-center" :fields="fields" :items="items" bordered>
            <template #cell(action)="data">
                <b-button variant="primary" @click="showModal(data.item.uid)">Ver mais</b-button>
            </template>
        </b-table>
        <b-modal v-model="show" centered hide-footer hide-header>
            <template #default>
                <b-container>
                   <b-row>
                       <b-col cols="4" offset="4" class="up">
                           <b-avatar src="https://placekitten.com/300/300" size="7rem"></b-avatar>
                       </b-col>
                    </b-row> 
                   <b-row>
                       <b-col cols="6">
                           <p class="my-4">{{ id }}</p>
                       </b-col>
                   </b-row>
                </b-container>
            </template>
        </b-modal>
    </div>
</template>
<script>
import { BTable, BButton, BModal, BAvatar, BContainer, BRow, BCol } from 'bootstrap-vue'
export default {
    name: 'CTable',
    components: { "b-table": BTable, "b-button": BButton, "b-modal": BModal, "b-avatar": BAvatar, "b-container": BContainer, "b-row": BRow, "b-col": BCol },
    data() {
        return {
            fields: [
                { key: "name", label: "Nome", sortable: true },
                { key: "gender", label: "Gênero" },
                { key: "birth", label: "Aniversário" },
                { key: "action", label: "Ação" }
            ],
            items: [
                { name : "Teste", gender : "teste", birth : "19/11/2000", uid : 100, teste: "TESTE"},
                { name : "Teste", gender : "teste", birth : "19/11/2000", uid : 200, teste: "TESTE"}
            ],
            id: 0,
            show: false
        }
    },
    methods: {
        showModal(id) {
            this.id = id
            this.show = true
        }
    }
}
</script>
<style>
.up { margin-top: -75px; }
</style>