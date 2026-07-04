<script setup>
import { ref, onMounted } from "vue";
import api from "./api/api";
import BookmarkForm from "./components/BookmarkForm.vue";

const bookmarks = ref([]);

async function loadBookmarks() {
  try {
    const response = await api.get("/bookmarks");
    bookmarks.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

async function saveBookmark(bookmark) {
  try {
    await api.post("/bookmarks", bookmark);

    await loadBookmarks();

  } catch (error) {
    console.error(error);
  }
}

async function deleteBookmark(id) {
  try {
    await api.delete(`/bookmarks/${id}`);

    await loadBookmarks();

  } catch (error) {
    console.error(error);
  }
}

onMounted(loadBookmarks);
</script>

<template>
  <div class="container">
    <h1>MediaVault</h1>
     <BookmarkForm @save="saveBookmark" />

    <div
      v-for="bookmark in bookmarks"
      :key="bookmark.id"
      class="card"
    >
      <h3>{{ bookmark.title }}</h3>

      <a
        :href="bookmark.url"
        target="_blank"
      >
        {{ bookmark.url }}
      </a>

      <p>{{ bookmark.type }}</p>
<button @click="deleteBookmark(bookmark.id)">
  Delete
</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 800px;
  margin: auto;
}

.card {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 15px 0;
  border-radius: 8px;
}
</style>
