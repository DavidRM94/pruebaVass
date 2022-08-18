<script>
    export default ({ 
        props:{
            lupa:{
                type:Boolean,
                default:false
            }
        }

    })
</script>
<template>
    <div class="contopcnav">
        <p class="opcnav">All</p>
        <p class="opcnav">Branding</p>
        <p class="opcnav">Web</p>
        <p class="opcnav">Photography</p>
        <p class="opcnav">App</p>
        <p v-if="lupa" class="lupa"><i class="bi bi-search"></i></p>
    </div>
</template>
