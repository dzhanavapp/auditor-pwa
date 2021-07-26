<template>
  <div class="info" @click="getQrCode">
    <div class="info__qr">
      <img v-if="code" :src="code" alt="" srcset="" />
    </div>
    <div class="info__text">
      <span>
        <template v-if="loading"> Загрузка...</template>

        <template v-else>
          Для авторизации кассы как <b>Администратор</b> просканируйте на
          кассовом оборудовании данный QR код
        </template>
      </span>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: 'AuthInfo',
  data() {
    return {
      code: null,
      loading: true,
    }
  },
  created() {
    this.getQrCode()
  },
  methods: {
    async getQrCode() {
      this.loading = true
      try {
        const { qrcode } = await this.$axios.$get(
          `/api/mob_get_qrcode/?token=${this.$store.state.user.data?.token}`
        )

        QRCode.toDataURL(qrcode, { margin: 0 }, (_, code) => {
          this.code = code
        })
      } catch (error) {
        const errorMessage = error?.response?.data || 'Ошибка получения QR Кода'
        this.$toast.error(errorMessage)
        console.log(errorMessage)
      }

      setTimeout(() => (this.loading = false), 300)
    },
  },
}
</script>

<style lang="postcss" scoped>
@import '~@/assets/css/variables.css';
.info {
  width: 100%;
  user-select: none;
  background-color: #fff;
  height: 200px;
  color: var(--color-darkness);
  display: flex;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;

  &__qr {
    flex: 1;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: right;
    }
  }

  &__text {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
