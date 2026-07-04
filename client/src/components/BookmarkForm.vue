<script setup>
import { reactive } from "vue";

const emit = defineEmits(["save"]);

const form = reactive({
  title: "",
  url: "",
  description: "",
  type: "website",
  favorite: false,
});

function submit() {
  emit("save", { ...form });

  form.title = "";
  form.url = "";
  form.description = "";
  form.type = "website";
  form.favorite = false;
}
</script>

<template>
  <div class="form">
    <input
      v-model="form.title"
      placeholder="Title"
    />

    <input
      v-model="form.url"
      placeholder="URL"
    />

    <textarea
      v-model="form.description"
      placeholder="Description"
    ></textarea>

    <select v-model="form.type">
      <option value="website">Website</option>
      <option value="article">Article</option>
      <option value="video">Video</option>
      <option value="image">Image</option>
    </select>

    <label>
      <input
        type="checkbox"
        v-model="form.favorite"
      />
      Favorite
    </label>

    <button @click="submit">
      Save Bookmark
    </button>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
}

input,
textarea,
select {
  padding: 10px;
  font-size: 16px;
}

textarea {
  min-height: 80px;
}

button {
  padding: 10px;
  cursor: pointer;
}
</style>
