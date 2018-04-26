<template>
    <button :class="classes" :disabled="disabled" :style="styles">
        <slot>Button</slot>
    </button>
</template>
<script>
    import cx from 'classnames'
    export default{
        props: {
            color: {
                type: String,
                default: 'default'
            },
            block: Boolean,
            lg: Boolean,
            md: Boolean,
            sm: Boolean,
            xs: Boolean,
            disabled: Boolean,
            outline: Boolean,
            size: String,
            flat: Boolean,
            circle: Boolean,
            round: Boolean,
            loading: Boolean //todo
        },
        computed: {
            classes() {
                return cx([
                    'su-btn',
                    'su-btn__' + this.color,
                    { 'su-btn__block': this.block },
                    { 'su-btn__lg': this.lg },
                    { 'su-btn__md': this.md },
                    { 'su-btn__xs': this.xs },
                    { 'su-btn__sm': this.sm },
                    { 'su-btn__disabled': this.disabled },
                    { 'su-btn__outline': this.outline },
                    { 'su-btn__flat': this.flat},
                    { 'su-btn__circle': this.circle },
                    { 'su-btn__round': this.round}
                ])
            },
            styles() {
                return  {
                    width: this.size,
                    height: this.size
                }
            }
        }
    }
</script>
