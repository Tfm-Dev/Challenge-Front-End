export const state = () => ({
    open: true
})

export const mutations = {
    open (state) {
        state.open = true
    },
    close (state) {
        state.open = false
    }
}

export const getters = {
    get (state) {
        return state.open
    }
}