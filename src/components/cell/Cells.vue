<template>
    <div class="su-cells" :class="{'su-forms': form}">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: {
            form: Boolean
        }
    }
</script>
