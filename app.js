Vue.component("name", {
    props: ["real", "code"],
    data: function () {
        return {
            change: this.real
        };
    },
    methods: {
        nameChange: function () {
            if (this.change === this.real) {
                this.change = this.code;
            } else {
                this.change = this.real;
            }
        }}, template: '<div v-on:click="nameChange()">{{change}}</div>'
});
var app = new Vue({
    el: "#app",
    data: {
        submit: "",
        textField: "",
        email: "",
        box: "",
        box2: "",
        list: [
            { name: "Protagonist", codename: "Joker" },
            { name: "Anne", codename: "Panther" },
            { name: "Ryuji", codename: "Skull" }
        ]},
    watch: {
        textField: function () {
            if (this.textField.length < 2) {
                this.box = "The input needs to have at least 2 characters.";
            } else {
                this.box = "";
            }
        },
        email: function () {
            if (!this.validEmail(this.email)) {
                this.box2 = "The input needs to be a valid email address.";
            } else {
                this.box2 = "";
            }
        },
        submit:function(){
            if(this.textField.length < 2){
                this.submit= "Not Submitted"
            }
            else{
                this.submit= "Submitted"
            }
        }
    }, methods: {
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }}
});