import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nodo: {},
        data: {}
    },
    getters: {},
    mutations: {
        getNodo(nodo, data) {
            this.state.nodo = nodo
            this.state.data = data
            console.log('cucho => ', data)
        },

        append(data) {
            console.log(data)
            const newChild = { id: 25, label: 'nuevo', children: [] };
            if (!data.children) {
                this.$set(data, 'children', []);
            }
            data.children.push(newChild);
        },
    },
    actions: {},
    modules: {}
})