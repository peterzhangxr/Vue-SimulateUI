<template>
    <div class="su-grids" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    import cx from "classnames"
    export default{
        props: {
            col: {
                type: Number,
                default: 2
            }
        },
        computed: {
            classes() {
                return {
                    [`col-${this.col}`]: true
                }
            }
        }
    }
</script>
