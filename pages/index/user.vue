<template>
  <div>
    <b-modal v-model="modal" centered hide-footer hide-header>
        <template #default>
            <b-container v-if="Load">
                <b-row>
                    <b-col cols="12" offset="4">
                        <p>Loading <b-icon-circle-fill class="ml-2" animation="throb"></b-icon-circle-fill> <b-icon-circle-fill animation="throb"></b-icon-circle-fill> <b-icon-circle-fill animation="throb"></b-icon-circle-fill></p>
                    </b-col>
                </b-row> 
            </b-container>
            <b-container v-else>
                <b-row>
                    <b-col cols="4" offset="4" class="up">
                        <b-avatar :src="user.picture.large" size="7rem"></b-avatar>
                    </b-col>
                </b-row> 
                <b-row>
                    <b-col class="mt_-1" cols="12">
                        <p class="my-4">Nome: {{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</p>
                    </b-col>
                    <b-col class="mt_-3" cols="12">
                        <p class="my-4">Email: {{ user.email }}</p>
                    </b-col>
                    <b-col class="mt_-3" cols="4">
                        <p class="my-4">Genêro: {{ user.gender }}</p>
                    </b-col>
                    <b-col class="mt_-3" cols="8">
                        <p class="my-4">Data de nascimento: {{ formateDate(user.dob.date) }}</p>
                    </b-col>
                    <b-col class="mt_-3" cols="6">
                        <p class="my-4">Telefone: {{ user.phone }}</p>
                    </b-col>
                    <b-col class="mt_-3" cols="6">
                        <p class="my-4">Nacionalidade: {{ user.nat }}</p>
                    </b-col>
                    <b-col class="mt_-3" cols="12">
                        <p class="my-4">Endereço: Rua {{ user.location.street.name }}, {{ user.location.street.number }}, {{ user.location.city }}, {{ user.location.state }}, {{ user.location.country }}</p>
                    </b-col>
                    <b-col class="mt_-3" cols="12">
                        <p class="my-4">ID: {{ user.login.uuid }}</p>
                    </b-col>
                    <b-col class="mt_-3" cols="12">
                        <p class="my-4">Link: <a :href="'http://localhost:3000'+$route.path+'?token='+user.login.uuid+$route.hash">http://localhost:3000{{ $route.path }}?token={{ user.login.uuid }}{{$route.hash}}</a></p>
                    </b-col>
                </b-row>
            </b-container>
        </template>
    </b-modal>
  </div>
</template>

<script>
import { BModal, BAvatar, BContainer, BRow, BCol, BIconCircleFill } from 'bootstrap-vue'

export default {
    name: 'UserPage',
    components: { "b-modal": BModal, "b-avatar": BAvatar, "b-container": BContainer, "b-row": BRow, "b-col": BCol, "b-icon-circle-fill": BIconCircleFill  },
    data() {
        return {
            Load: true,
            user: {
                gender: "",
                name: {
                    title: "",
                    first: "",
                    last: ""
                },
                location: {
                    street: {
                        number: "",
                        name: ""
                    },
                    city: "",
                    state: "",
                    country: "",
                    postcode: "",
                    coordinates: {
                        latitude: "",
                        longitude: ""
                    },
                    timezone: {
                        offset: "",
                        description: ""
                    }
                },
                email: "",
                login: {
                    uuid: "",
                    username: "",
                    password: "",
                    salt: "",
                    md5: "",
                    sha1: "",
                    sha256: ""
                },
                dob: {
                    date: "",
                    age: ""
                },
                registered: {
                    date: "",
                    age: ""
                },
                phone: "",
                cell: "",
                id: {
                    name: "",
                    value: ""
                },
                picture: {
                    large: "",
                    medium: "",
                    thumbnail: ""
                },
                nat: ""
            }
        }
    },
    computed: {
        modal: {
            get() {
                return this.$store.getters.get
            },
            set() {
                this.Load = true
                this.$store.commit('close')
            }
        }
    },
    watch: {
        async '$route'(){
            await this.$store.dispatch('user/fetchPage', this.$route.hash.replace("#Page", ""))
            this.user = this.$store.getters['user/id'](this.$route.query.token)
            this.Load = false
        }
    },
    async mounted() {
        await this.$store.dispatch('user/fetchPage', this.$route.hash.replace("#Page", ""))
        this.user = this.$store.getters['user/id'](this.$route.query.token)
        this.Load = false
    },
    methods: {
        formateDate(value) {
            return value.split("T")[0].split("-")[2] + "/" + value.split("T")[0].split("-")[1] + "/" + value.split("T")[0].split("-")[0]
        }
    }

}
</script>

<style>
.mt_-1 {margin-top: -10px;}
.mt_-3 {margin-top: -30px;}
</style>