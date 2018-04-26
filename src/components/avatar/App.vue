<template>
    <div class="su-avatar" :class="tileCls" :style="sizeSty">
        <slot>
            <img v-if="url" :src="url" />
        </slot>
        <slot name="upload"></slot>
    </div>
</template>
<script>
    import cx from 'classnames';
    export default{
        props: {
            url: String,
            size: String,
            tile: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            tileCls() {
                return [{
                    'su-avatar__tile': this.tile
                }]
            },
            sizeSty() {
                return {
                    width: this.size,
                    height: this.size
                }
            }
        }
    }
</script>
