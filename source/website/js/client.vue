
<template lang='pug'>
div(id="qna-client")
  lex-web-ui
</template>

<script>
module.exports = {
    data: () => ({}),
    components: {},
    computed: {
    },
    methods: {},
};
</script>

<style lang='scss'>
  #lex-web > nav {
    display:none;
  }
  nav {
    z-index:1;
  }
  .v-toolbar.v-toolbar--density-default.bg-cyan {
    color:white !important;
  }
</style>
