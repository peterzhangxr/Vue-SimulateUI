<template>
    <div class="su-cell">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: {
            to: [String, Object]
        }
    }
</script>
