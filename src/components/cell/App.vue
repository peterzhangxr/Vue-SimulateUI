<template>
    <div class="su-cell" :class="{'su-cell__form': form, 'su-cell__none': none}">
        <slot></slot>
    </div>
</template>
<script>
    import cx from 'classnames'
    export default {
        props: {
            to: [String, Object],
            form: Boolean,
            none: Boolean,
            icon: Boolean
        },
        computed: {
            classes() {
                return cx({
                    ['su-cell__form']: this.form,
                    ['su-cell__none']: this.none,
                    ['su-cell__icon']: this.icon
                })
            }
        }
    }
</script>
