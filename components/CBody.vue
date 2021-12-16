<template>
    <div>
        <b-container class="mt-3 text-justify">
            <b-row>
                <b-col cols="8" offset="2">
                    <b-row>
                        <b-col cols="12">
                            <span>Teste</span>
                        </b-col>
                        <b-col class="mt-2" cols="12">
                            <b-row>
                                <b-col cols="3">
                                    <b-form-select v-model="selected" :options="options"></b-form-select>
                                </b-col>
                                <b-col cols="9">
                                    <b-form-input v-model="nome" placeholder="Insira o nome ou a nacionalidade"></b-form-input>
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
        selected: 'name',
        nome: "",
        options: [
          { value: 'name', text: 'Nome' },
          { value: 'nat', text: 'Nacionalidade' }
        ]
      }
    }
}
</script>