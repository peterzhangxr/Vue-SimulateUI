<template>
    <div>
        <s-search v-model="msg" autofocus v-on:search="getList"></s-search>
        {{msg}}
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello vue',
                tile: false
            }
        },
        components:{
        },
        methods: {
            getList() {
                console.log(this.msg)
            }
        }
    }
</script>
