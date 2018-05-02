<template>
    <div>
        <s-checkbox v-model="msg" @change="getList">你们的{{msg}}</s-checkbox>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg: true,
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
