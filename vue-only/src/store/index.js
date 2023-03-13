import { createStore } from 'vuex'
export default createStore({
    state: {
        user: null,
        ahmed: "ahmedin",
        product: [],
        cart_store: [],
        total_quantity: 0,
        total_price: 0,
        isAdmin:null,

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
        },
        cart_store: (state) => {
            return state.cart_store;
        },
        total_quantity: (state) => {
            return state.total_quantity;
        },
        total_price: (state) => {
            return state.total_price;
        },
        isAdmin:(state)=>{
            return state.isAdmin;
        }
    },
    actions: {
        user(context, user) {
            context.commit('user', user);
        },
        product(context, product) {
            context.commit('product', product);
        },
        isAdmin(context, isAdmin){
           context.commit('isAdmin', isAdmin);
        },

    },
    mutations: {
        setnullcartstore(state, payload) {
            let len = state.cart_store.length;
            state.cart_store.splice(0, len);
            payload = 0;
            state.total_price = payload;
            state.total_quantity = payload;
            // for (let index = 0; index < state.cart_store.length; index++) {

            //     state.cart_store[index].splice();
            //     console.log(payload);

            // }
        },
        isAdmin(state,isAdmin){
          state.isAdmin=isAdmin;
        },
        user(state, user) {
            state.user = user;
        },
        product(state, product) {
            state.product = product;
        },
        cart_store(state, payload) {
            state.total_quantity = 0;
            state.total_price = 0;
            let count = 0;


            if (state.cart_store.length > 0) {
                for (let i = 0; i < state.cart_store.length; i++) {
                    if (payload.id == state.cart_store[i].id) {
                        count = 1;
                        state.cart_store[i].quantity = payload.quantity;
                    }
                }
            }


            if (count == 0 || state.cart_store.length == 0) {
                state.cart_store.push(payload);
            }

            for (let i = 0; i < state.cart_store.length; i++) {
                state.total_quantity = state.total_quantity + state.cart_store[i].quantity;
                state.total_price = state.total_price + state.cart_store[i].price * state.cart_store[i].quantity;
            }
        },
        removeCart(state, payload) {
            const objWithIdIndex = state.cart_store.findIndex((obj) => obj.id === payload.id);

            if (objWithIdIndex > -1) {
                state.cart_store.splice(objWithIdIndex, 1);
            }
            state.total_quantity = 0;
            state.total_price = 0;
            for (let i = 0; i < state.cart_store.length; i++) {
                state.total_quantity = state.total_quantity + state.cart_store[i].quantity;
                state.total_price = state.total_price + state.cart_store[i].price * state.cart_store[i].quantity;

            }
            return state.cart_store;

        }


    }


})