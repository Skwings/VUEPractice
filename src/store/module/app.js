export default {
    state: {
        userName: "wzj",
        count: 0,
        todos: [
			{ id: 1, done: true },
			{ id: 2, done: true },
			{ id: 3, done: false}
	    ]
    },
    getters: {
        doneTodos: state => {
            return function(id){
                return state.todos.filter(res => {
                    return res.id > id
                })
            }
        }
    },
    mutations: {
        increCount (state) {
            // setTimeout( () => {
                state.count++
            // }, 1000)
        },
        reduceCount (state){
            state.count--
        }
    },
    actions: {
        increateCount(context) {
            setTimeout(() => {
                context.commit('increCount');
            }, 1000)
        }
    }
}