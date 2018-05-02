<template>
    <div class="su-checkbox">
        <input type="checkbox" v-model="isActive" @change="toggle"/>
        <i class="su-checkbox__icon simulate-ui su-right"></i>
        <span class="su-checkbox__text">
            <slot></slot>
        </span>
    </div>
</template>
<script>
    export default {
        model: {
            prop: 'value',
            event: 'change'
        },
        props: {
            inputValue: null,
            value: null
        },

        data() {
            return {
                active: this.isActive
            }
        },
        computed: {
            isActive: {
                get() {
                    console.log(this.inputValue)
                    let input = this.value
                    if (Array.isArray(input)) {
                        return this.value.indexOf(this.inputValue) != -1
                    } else if (this.inputValue) {
                        return this.value === this.inputValue
                    }

                    return !!input
                },
                set(val) {
                    return !!val;
                }
            }
        },
        methods: {
            toggle() {
                let input = this.value
                if (Array.isArray(input)) {
                    input = input.slice()

                    const i = input.indexOf(this.inputValue)

                    if (i === -1) {
                        input.push(this.inputValue)
                    } else {
                        input.splice(i, 1)
                    }
                } else if (this.inputValue) {
                    input = this.inputValue === input ? null : this.inputValue
                } else {
                    input = !input
                }

                this.$emit('input', input)
                this.$emit('change', input)
            }
        }
    }
</script>
