<template>
    <div>
        <s-cells>
            <s-cell>
                <s-cell-bd>
                    <s-checkbox v-model="msg" @change="getList">你们的{{msg}}</s-checkbox>
                </s-cell-bd>
            </s-cell>
            <s-cell>
                <s-cell-bd>
                    <s-checkbox v-model="msg" @change="getList">你们的{{msg}}</s-checkbox>
                </s-cell-bd>
            </s-cell>
        </s-cells>
        <s-cells>
            <s-cell>
                <s-cell-bd>
                    标题
                </s-cell-bd>
                <s-cell-ft>说明</s-cell-ft>
            </s-cell>
            <s-cell>
                <s-cell-bd>
                    标题
                </s-cell-bd>
            </s-cell>
        </s-cells>
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
