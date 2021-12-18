export const state = () => ({
    list:[]
})

export const mutations = {
    add (state, text) {
        state.list = text
    }
}

export const getters = ({
    users (state) {
        return state.list
    },
    id: (state) => (id) => {
        return state.list.find(user => user.login.uuid === id)
    }
})