<template>
    <div class="main">
        <div class="content">
            <div class="player">
                <vue-plyr>
                    <div data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>
                </vue-plyr>
                
            </div>
        </div>
        
  </div>
</template>

<script>
export default {
    name: 'Main',
    data() {
        return {
            source: "/static/Em-Se-La-Co-Dau-Minh-Vuong-M4U-Huy-Cung.mp3"
        }
    }
}
</script>