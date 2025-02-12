<template>
	<div class="text-center">
		<p class="text-xl mb-4">{{ $t('common.common.message') }}</p>
	</div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
