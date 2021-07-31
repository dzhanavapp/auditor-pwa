<template>
  <CodeReader @code="handleCode" />
</template>

<script>
export default {
  name: 'AuditCodeReader',
  methods: {
    handleCode(code) {
      setTimeout(() => {
        this.$emit('code', code)
      }, 300)
    },
  },
}
</script>
