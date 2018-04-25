<template>
    <div>
        <s-switch v-model="open"></s-switch>{{ open }}
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello vue',
                open: true
            }
        },
        components:{
        }
    }
</script>
