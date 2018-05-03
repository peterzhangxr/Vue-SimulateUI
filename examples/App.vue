<template>
    <div>
        <s-counter v-model="msg" :min="0" :max="10"></s-counter>
        {{msg}}
    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg: 0,
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
