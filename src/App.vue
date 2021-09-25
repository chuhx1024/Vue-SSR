<template>
    <!-- 客户端渲染的入口节点 -->
    <div id="app">
        <h1>{{mainTitle}}</h1>
        <input type="text" v-model="mainTitle">
        <button @click="change">change</button>
    </div>
</template>
<script>
export default {
    name: 'App',
    data () {
        return {
            mainTitle: 'Vue SSR',
        }
    },
    methods: {
        change () {
            this.mainTitle = 'Hello World'
        },
    },
}
</script>
<style>
.st {
    color: pink;
}
 </style>
