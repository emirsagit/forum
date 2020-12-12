module.exports = {
    data() {
        return {
            colors: [
                "gray",
                "red",
                "yellow",
                "green",
                "indigo",
                "purple",
                "teal",
                "pink"
            ]
        };
    },
    computed: {
        randomColor() {
            return this.colors[Math.floor(Math.random() * this.colors.length)]
        },
    },
};
