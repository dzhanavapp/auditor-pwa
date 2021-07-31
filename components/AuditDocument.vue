<template>
  <li class="audit">
    <div class="audit__info">
      <div class="audit__info_document">
        Инв: {{ document.id }} – {{ document.start }}
      </div>
    </div>
    <div class="audit__divergence">
      <div
        :class="[
          'audit__divergence-icon',
          { 'audit__divergence-icon_error': document.stat === '2' },
        ]"
      ></div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'AuditDocument',
  props: {
    document: {
      type: Object,
      required: true,
    },
  },
  computed: {
    documentClass() {
      return 'good'
    },
  },
}
</script>

<style lang="postcss" scoped>
.audit {
  overflow: hidden;
  display: flex;
  border-radius: 12px;
  background-color: #f0f0f0;
  border: 2px solid #e8e8e8;
  cursor: pointer;

  &__info {
    padding: 12px 18px;
    flex: 1;
    text-align: left;
    overflow: hidden;
    display: flex;
    align-items: center;

    &_document {
      font-size: 22px;
      font-weight: 500;
      color: #838383;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  &__divergence {
    color: #fff;
    padding: 12px 18px;
    margin-left: auto;
    width: 140px;
    min-width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e8e8e8;
    font-weight: 600;
    font-size: 24px;

    &-icon {
      background-image: svg-load('./good.svg', fill=#838383);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: 50px;
      height: 50px;
      &_error {
        background-image: svg-load('./error.svg', fill=#D36868);
      }
    }
  }
}
</style>
