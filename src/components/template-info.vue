<script setup lang="ts">
import GithubInfo from './github-info.vue';
</script>

<template>
  <main>
    <h1>Lean Vue App Template</h1>
    <div>
      <h2>Features</h2>
      <ul>
        <li>Lean</li>
        <li>TypeScript</li>
        <li>Formatting with Prettier</li>
        <li>Linting with ESLint</li>
        <li>Vue Devtools</li>
      </ul>
    </div>
    <GithubInfo repo="lean-vue/template-ts" />
  </main>
</template>

<style>
:root {
  --text-contrast: #211f26;
  --text-color: #646464;
  --border-color: #dbd8e0;
}
</style>

<style scoped>
main {
  max-width: 80rem;
  margin: 0 2rem;
  padding: 2rem 0;
  height: 100svh;
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  place-items: center;
  color: var(--text-color);
}

h1,
h2 {
  font-weight: 500;
  margin: 0;
  color: var(--text-contrast);
}
ul {
  list-style: none;
  padding: 0;
  margin-top: 0;
}
li {
  display: flex;
  gap: 0 1rem;
  margin-top: 0.5rem;
}
li::before {
  content: '-';
}
</style>
