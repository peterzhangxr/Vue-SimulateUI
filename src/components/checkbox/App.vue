<template>
    <div class="su-checkbox" :class="{'su-checkbox__right': right}">
        <input type="checkbox" v-model="isActive" @change="toggle"/>
        <i class="su-checkbox__icon simulate-ui su-right" :class="{'su-checkbox__single': single}"></i>
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
            value: null,
            trueValue: null,
            falseValue: null,
            single: Boolean,
            right: Boolean
        },

        data() {
            return {
                active: this.isActive
            }
        },
        computed: {
            isActive: {
                get() {
                    let input = this.value
                    if (Array.isArray(input)) {
                        return this.value.indexOf(this.inputValue) !== -1
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
                } else if (this.trueValue || this.falseValue) {
                    input = (input === this.trueValue) ? this.falseValue : this.trueValue
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
