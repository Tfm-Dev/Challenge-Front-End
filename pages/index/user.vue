<template>
  <div>
    <b-modal v-model="modal" centered hide-footer hide-header>
        <template #default>
            <b-container>
                <b-row>
                    <b-col cols="4" offset="4" class="up">
                        <b-avatar :src="user.picture.large" size="7rem"></b-avatar>
                    </b-col>
                </b-row> 
                <b-row>
                    <b-col cols="6">
                        <p class="my-4">{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</p>
                    </b-col>
                </b-row>
            </b-container>
        </template>
    </b-modal>
  </div>
</template>

<script>
import { BModal, BAvatar, BContainer, BRow, BCol } from 'bootstrap-vue'

export default {
    name: 'UserPage',
    components: { "b-modal": BModal, "b-avatar": BAvatar, "b-container": BContainer, "b-row": BRow, "b-col": BCol  },
    computed: {
        modal: {
            get() {
                return this.$store.getters.get
            },
            set() {
                this.$store.commit('close')
            }
        },
        user: {
            get() {
                return this.$store.getters['user/id'](this.$route.query.token)
            },
            set() {
                this.$store.commit('')
            }
        }
    }
}
</script>

<style>

</style>