<template>
    <div>
        <s-switch v-model="tile"></s-switch>{{tile}}
        <s-avatar url="https://placehold.it/144x144" :tile="tile"></s-avatar>
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
        }
    }
</script>
