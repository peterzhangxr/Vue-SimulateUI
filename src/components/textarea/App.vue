<template>
    <div>
        <label v-if="label" class="su-cell__label">{{ label }}</label>
        <textarea v-model="current" :rows="rows" :readonly="readonly" :disabled="disabled" :placeholder="placeholder" @change="$emit('input', current)"></textarea>
    </div>
</template>
<script>
    export default{
        props: {
            value: [String, Number],
            label: String,
            placeholder: String,
            rows: {
                type: Number,
                default: 3
            },
            readonly: Boolean,
            disabled: Boolean
        },
        data() {
            return {
                current: this.value
            }
        }
    }
</script>
