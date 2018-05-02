<template>
    <div class="su-search-layout">
        <div class="su-search-bar" :class="{'su-search-bar__active': active}" @click.self="toggle">
            <div class="su-search-bar__icon" @click="toggle">
                <i class="simulate-ui su-search"></i> <span>搜索</span>
            </div>
            <div class="su-search-bar__input">
                <input type="text" ref="input" v-model="current" @keyup="handleInput" :placeholder="placeholder"/>
                <div class="su-search-bar__close" @click="clear">
                    <i class="simulate-ui su-close"></i>
                </div>
            </div>

            <div class="su-search-bar__cancel" @click="cancel">取消</div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    export default{

        props: {
            value: String,
            autofocus: Boolean,
            placeholder: {
                type: String,
                default: '请输入关键字'
            }
        },
        data(){
            return {
                active: false,
                current: this.value
            }
        },
        mounted() {
            if (this.autofocus) {
                this.toggle()
            }
        },
        methods: {
            toggle() {
                this.active = true;
                this.$refs.input.focus()
            },
            cancel() {
                this.active = false;
            },
            clear() {
                this.current = ''
                this.$input('input', this.current)
            },

            /**
             * 响应输入事件
            */
            handleInput() {
                this.$emit('input', this.current)
                this.$emit('search')
            }
        }
    }
</script>
