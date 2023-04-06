import axios from "axios";

export default {
    state: {
        animatesArray: [],
        randomAnimatesArray: [],
        pending: false,
        searchValue: ''
    },
    mutations: {
        UPDATE_ANIMATES(state: any, data: any) {
            state.animatesArray = data;
            if (state.animatesArray.length) {
                state.pending = true;
            }
        },
        UPDATE_SEARCH(state:any, value:any) {
            state.searchValue = value;
        },
        UPDATE_RANDOM_ANIMATES(state:any, data:any) {
            state.randomAnimatesArray.push(data);
        }
    },
    actions: {
        GET_ANIMATES({commit}: {commit: Function}) {
            const API = 'https://api.giphy.com/v1/gifs/trending?api_key=0nfa2v4AC3XQiPsJnQpB9uLjXXzOIJ63&limit=90&rating=g';
            return axios.get(API).then(response => response.data).then(data => {
                console.log(data.data)
                commit('UPDATE_ANIMATES', data.data)
            })
        },
        GET_RANDOM_ANIMATES({ commit }: { commit: Function }) {
            const limit = 20;
            const API = `https://api.giphy.com/v1/gifs/random?api_key=0nfa2v4AC3XQiPsJnQpB9uLjXXzOIJ63&tag=&limit=${limit}&rating=g`;
            return axios.get(API).then(response => response.data).then(data => {
                // console.log(data.data)
                commit('UPDATE_RANDOM_ANIMATES', data.data)
            })
        }
    },
    getters: {
        SLIDER_ANIMATES(state: any) {
            return state.animatesArray.slice(0, 20);
        },
        ANIMATES_RANDOM(state: any) {
            return state.randomAnimatesArray;
        },
        PENDING(state:any) {
            return state.pending;
        },
        ANIMATES_PAGE:(state: any) => (param: string) => {
            return state.animatesArray.filter((item: any) => item.id === param);
        },
        HANDLER_SEARCH(state:any) {
            return state.animatesArray.filter((item: any) => item.title.toLowerCase().match(state.searchValue.toLowerCase()));
        }
    }
}