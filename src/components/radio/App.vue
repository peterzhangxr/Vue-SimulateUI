<template>
    <div class="su-checkbox">
        <input type="radio" :name="name"/>
        <i class="su-checkbox__icon simulate-ui su-right"></i>
        <span class="su-checkbox__text">
            <slot></slot>
        </span>
    </div>
</template>
<script>
    export default {
        model: {
            prop: 'value',
            event: 'change'
        },
        props: {
            inputValue: null,
            value: null,
            name: String,
            right: Boolean,
            single: Boolean
        },
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>
