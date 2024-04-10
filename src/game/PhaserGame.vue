<template>
  <div id="game-container"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import StartGame from './main';
import Phaser from 'phaser';

const scene = ref<Phaser.Scene>();
const game = ref<Phaser.Game | null>();

onMounted(() => {
  game.value = StartGame('game-container');
});

onUnmounted(() => {
  if (game.value) {
    game.value.destroy(true);
    game.value = null;
  }
});

defineExpose({ scene, game });
</script>
