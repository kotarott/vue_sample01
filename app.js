let app = Vue.createApp({
    data() {
        return {
            tasks: ["a", "b", "c"],
            new_task: "",
        }
    },
    methods: {
        add_task() {
            this.tasks.push(this.new_task)
            this.new_task = ""
        },
        onDelete(value) {
            this.tasks.splice(value, 1)
        }
    },
    computed: {
        task_num () {
            return this.tasks.length
        }
    }
})

app.component('single-task', {
    props: {
        task: {
            type: String,
            required: true,
        }
    },
    emits: ["delete-task"],
    template: `
        <div class="alert alert-success align-items-center m-2">
            {{ task }}
            <i class="fas fa-times float-end" @click.prevent="onDelete"></i>
        </div>
    `
    ,
    methods: {
        onDelete() {
            this.$emit('delete-task')
        }
    },
})

app.mount("#app")
