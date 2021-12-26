export const state = () => ({
    List:[]
})

export const mutations = {
    add (state, data) {
        state.List = data
    },
    push (state, data) {
        state.List.push(...data)
    }
}

export const actions = {
    async fetchGet({ commit }) {
        await fetch("https://randomuser.me/api/?seed=94c025a0a1ca3503&page=1&results=10&noinfo").then(response => response.json()).then((data) => {
            commit('push', data.results)
        })
    },
    async fetchPage({ commit }, Page) {
        await fetch("https://randomuser.me/api/?seed=94c025a0a1ca3503&page=1&results="+ Page +"0&noinfo").then(response => response.json()).then((data) => {
            commit('add', data.results)
        })
    },
    async fetchGetPage({ commit }, Page) {
        await fetch("https://randomuser.me/api/?seed=94c025a0a1ca3503&page="+ Page +"&results=10&noinfo").then(response => response.json()).then((data) => {
            commit('push', data.results)
        })
    }
}

export const getters = ({
    users (state) {
        return state.List
    },
    id: (state) => (id) => {
        return state.List.find(user => user.login.uuid === id)
    }
})