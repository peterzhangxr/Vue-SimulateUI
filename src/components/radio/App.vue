<template>
    <div class="su-checkbox" :class="{'su-checkbox__right': right}">
        <input type="radio" :name="name" @change="toggle"/>
        <i class="su-checkbox__icon simulate-ui su-right" :class="{'su-checkbox__single': single}"></i>
        <span class="su-checkbox__text">
            <slot></slot>
        </span>
    </div>
</template>
<script>
    export default {
        props: {
            inputValue: null,
            value: null,
            name: {
                type: String,
                required: true
            },
            right: Boolean,
            single: Boolean
        },
        methods: {
            toggle() {
                this.$emit('input', this.inputValue)
            }
        }
    }
</script>
