export const state = () => ({
    list:[]
})

export const mutations = {
    add (state, data) {
        state.list = data
    },
    push (state, data) {
        state.list.push(...data)
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