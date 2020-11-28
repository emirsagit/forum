
export default {
    data() {
        return {
            items: []
        };
    },
    methods: {
        remove(index) {
            this.items.splice(index, 1);
            // this.$emit("removed");
        },
        addReply(item) {
            this.items.push(item);
            // this.$emit("added");
        },
        updated(item) {
            const index = this.items.findIndex(el => item.id === el.id);
            this.items.splice(index, 1);
            this.items.push(item);
            // Vue.set(this.items, index, item);
            console.log(this.items);
        }
    }
};
