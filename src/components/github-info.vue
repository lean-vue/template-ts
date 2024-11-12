<script setup lang="ts">
import { onMounted, ref } from 'vue';

const commits = ref(
  [] as {
    sha: string;
    html_url: string;
    commit: { message: string; author: { date: string } };
  }[],
);

async function fetchGitCommits() {
  const response = await fetch(
    'https://api.github.com/repos/lean-vue/template-ts/commits?per_page=5',
  );
  const data = await response.json();
  commits.value = data;
}

onMounted(() => {
  fetchGitCommits();
});
</script>
<template>
  <article>
    <h3>Last Git Commits</h3>
    <table>
      <thead>
        <tr>
          <th>Link</th>
          <th>Datum</th>
          <th>Text</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="commit in commits" :key="commit.sha">
          <td>
            <a :href="commit.html_url">{{ commit.sha.slice(0, 6) }}</a>
          </td>
          <td>
            {{ new Date(commit.commit.author.date).toLocaleString() }}
          </td>
          <td>
            {{ commit.commit.message }}
          </td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<style scoped>
article {
  border: 1px solid var(--border-color);
  border-radius: 0.375rem;
  padding: 1rem 0;
  width: 100%;
  max-width: 48rem;
}
h3 {
  margin: 0;
  padding: 0 1rem 1rem;
  font-weight: 500;
  border-bottom: 1px solid var(--border-color);
}
table {
  padding: 1rem;
  width: 100%;
}
th {
  text-align: left;
}
td,
th {
  padding: 0.25rem 0.5rem;
}
td:nth-child(2) {
  text-wrap: nowrap;
}
</style>
