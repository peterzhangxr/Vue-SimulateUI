<template>
    <div class="su-switch">
        <input type="checkbox" :disabled="disabled" class="su-switch__input" v-model="current"/>
        <div class="su-switch__box" :class="'su-switch__' + color"></div>
    </div>
</template>

<script>
    export default{
        props: {
            color: {
                type: String,
                default: 'primary'
            },
            value: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }

        },
        computed: {
            current: {
                get() {
                    return this.value
                },
                set(val) {
                    this.$emit('input',  val)
                }
            }
        }

    }
</script>
