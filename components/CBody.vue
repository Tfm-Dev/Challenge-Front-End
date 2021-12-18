<template>
    <div>
        <b-container class="mt-3 text-justify">
            <b-row>
                <b-col cols="8" offset="2">
                    <b-row>
                        <b-col cols="12">
                            <span>
                                Esta é a base de dados da Pharm Inc, onde contém as informações de nossos pacientes, podendo ser consultados relatórios dos mesmos.
                            </span>
                        </b-col>
                        <b-col class="mt-3" cols="12">
                            <b-row>
                                <b-col cols="3">
                                    <b-form-select v-model="selected" :options="options"></b-form-select>
                                </b-col>
                                <b-col cols="8">
                                    <b-form-input v-model="nome" placeholder="Insira o nome ou a nacionalidade" @keyup.enter="searchList"></b-form-input>
                                </b-col>
                                <b-col cols="1">
                                    <b-button variant="primary" @click="searchList"><b-icon-search></b-icon-search></b-button>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col class="mt-2" cols="12">
                            <CTable />
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { BContainer, BRow, BCol, BFormSelect, BFormInput, BButton, BIconSearch } from 'bootstrap-vue'

export default {
    name: 'CBody',
    components: {
        "b-container": BContainer,
        "b-row": BRow,
        "b-col": BCol,
        "b-form-select": BFormSelect,
        "b-form-input": BFormInput,
        "b-button": BButton,
        "b-icon-search": BIconSearch
    },
    data() {
      return {
        selected: 'name',
        nome: "",
        options: [
          { value: 'name', text: 'Nome' },
          { value: 'nat', text: 'Nacionalidade' }
        ]
      }
    },
    methods: {
        async searchList() {
            if(this.nome !== "" && this.selected === "nat") {
                const result = await this.$axios.get("https://randomuser.me/api/?seed=94c025a0a1ca3503&page=1&results=10&nat="+this.nome)
                this.$store.commit('user/add', result.data.results)
            }
        }
    }
}
</script>