<template>
    <div>
        <label v-if="label" class="su-cell__label">{{ label }}</label>
        <input :type="type" v-model.trim="current" class="su-input" :readonly="readonly" :disabled="disabled" :placeholder="placeholder" @change="$emit('input', current)"/>
    </div>
</template>
<script>
    export default{
        props: {
            value: [String, Number],
            label: String,
            placeholder: String,
            type: {
                type: String,
                default: 'text'
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
