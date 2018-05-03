<template>
    <div class="su-cell__ft" :class="{'su-cell__ft__none': none}">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: {
            none: Boolean
        }
    }
</script>
