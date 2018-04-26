<template>
    <div>
        <s-switch v-model="tile"></s-switch>{{tile}}
        <s-avatar url="https://placehold.it/144x144" :tile="tile"></s-avatar>
        <s-btn color="primary" block loading>
            <!--<s-icon name="map"></s-icon> 按钮-->
            加载中...
        </s-btn>
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
