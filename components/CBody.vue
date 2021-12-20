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
                                <b-col cols="4">
                                    <label for="nationalities">Nacionalidades</label>
                                    <b-form-select id="nationalities" v-model="selected" :options="options" multiple :select-size="2" @change="selectNat"></b-form-select>
                                </b-col>
                                <b-col class="mt-5" cols="8">
                                    <b-form-input v-model="nome" placeholder="Busca por nome" @keyup.enter="searchList"></b-form-input>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col class="mt-2" cols="12">
                            <CTable :filter="nome" />
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { BContainer, BRow, BCol, BFormSelect, BFormInput } from 'bootstrap-vue'

export default {
    name: 'CBody',
    components: {
        "b-container": BContainer,
        "b-row": BRow,
        "b-col": BCol,
        "b-form-select": BFormSelect,
        "b-form-input": BFormInput,
    },
    data() {
      return {
        selected: ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NO', 'NL', 'NZ', 'TR', 'US'],
        nome: "",
        options: [
            { value: 'AU', text: 'Australia' },
            { value: 'BR', text: 'Brasil' },
            { value: 'CA', text: 'Brasil' },
            { value: 'CH', text: 'Brasil' },
            { value: 'DE', text: 'Brasil' },
            { value: 'DK', text: 'Brasil' },
            { value: 'ES', text: 'Brasil' },
            { value: 'FI', text: 'Brasil' },
            { value: 'FR', text: 'Brasil' },
            { value: 'GB', text: 'Brasil' },
            { value: 'IE', text: 'Brasil' },
            { value: 'IR', text: 'Brasil' },
            { value: 'NO', text: 'Brasil' },
            { value: 'NL', text: 'Brasil' },
            { value: 'NZ', text: 'Brasil' },
            { value: 'TR', text: 'Brasil' },
            { value: 'US', text: 'Estados Unidos' }
        ]
      }
    },
    mounted() {
        this.$store.commit('open')
    },
    methods: {
        async selectNat() {
            if(this.selected.length !== 0) {
                const result = await this.$axios.get("https://randomuser.me/api/?seed=94c025a0a1ca3503&page=1&results=50&nat="+this.selected)
                this.$store.commit('user/add', result.data.results)
            }
        }
    }
}
</script>