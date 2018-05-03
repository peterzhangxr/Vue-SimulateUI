<template>
    <div :class="{ 'su-flex__item': flex }">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        props: {
            flex: {
                type: Boolean,
                default: true
            }
        }
    }
</script>
