<template>
    <i :class="classes" :style="styles">
        <slot></slot>
    </i>
</template>
<script>
    import cx from 'classnames'
    export default{
        props: {
            color: String,
            size: String,
            name: String
        },
        computed: {
            classes() {
                if (this.name) {
                    return cx([
                        'simulate-ui',
                        'su-' + this.name
                    ])
                } else if(this.$slots.default) {
                    let text = this.$slots.default[0].text
                    //清空
                    this.$slots.default[0].text = ''
                    return cx([
                        text
                    ])
                }
            },
            styles() {
                return {
                    'fontSize': this.size
                }
            }
        },
    }
</script>
