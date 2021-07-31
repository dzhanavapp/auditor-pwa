<template>
  <li class="audit">
    <div class="audit__info">
      <div class="audit__info_product">{{ audit.name }}</div>
      <div class="audit__info_state">
        <div class="audit__info_state-real">
          Остаток Ф: {{ audit.amount_rev }}
        </div>
        <div :class="['audit__info_state-now', divergenceClass]">
          Остаток П: {{ audit.amount }}
        </div>
      </div>
    </div>
    <div :class="['audit__divergence', divergenceClass]">{{ divergence }}</div>
  </li>
</template>

<script>
export default {
  name: 'AuditItem',
  props: {
    audit: {
      type: Object,
      required: true,
    },
  },
  computed: {
    divergence() {
      const divergence = +this.audit.amount_rev - +this.audit.amount
      return divergence > 0 ? `+${divergence}` : divergence
    },
    divergenceClass() {
      if (this.divergence > 0) return 'green'
      else if (this.divergence < 0) return 'red'
      else return 'gray'
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

    &_product {
      font-size: 16px;
      color: #4a4a4a;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &_state {
      display: flex;
      margin-top: 5px;

      &-real,
      &-now {
        color: #838383;
      }

      &-real {
        margin-right: 12px;
      }

      &-now {
        &.green {
          color: #009966;
        }

        &.red {
          color: #d36868;
        }
      }
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

    &.green {
      background-color: #3eab87;
    }

    &.red {
      background-color: #d36868;
    }
  }
}
</style>
