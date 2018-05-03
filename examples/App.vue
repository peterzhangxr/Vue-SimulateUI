<template>
    <div>
        <s-radio name="radio" input-value="1" v-model="msg">选项1</s-radio>
        <s-radio name="radio" input-value="2" v-model="msg">选项2</s-radio>
        <s-radio name="radio" input-value="3" v-model="msg">选项3</s-radio>
        {{msg}}
    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg: null,
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
