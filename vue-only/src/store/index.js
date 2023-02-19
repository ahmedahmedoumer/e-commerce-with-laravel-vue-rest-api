import { createStore } from 'vuex'

// const state = {

// }

export default createStore({
    state: {
        user: null,
        ahmed: "ahmedin",
        product: {
            id: '',
            name: '',
            detail: '',
            created_at: '',
            updated_at: '',
        },
    },
    getters: {
        user: (state) => {
            return state.user;
        },
        dinz: (state) => {
            return state.ahmed;
        },
        product: (state) => {
            return state.product;
        }
    },
    actions: {
        user(context, user) {
            context.commit('user', user);
        },
        product(context, product) {
            context.commit('product', product);
        }

    },
    mutations: {
        user(state, user) {
            state.user = user;
        },
        product(state, product) {
            state.product = product;
        }
    }
})