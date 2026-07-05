<script setup>
import { reactive,watch } from "vue";

const props = defineProps({
  bookmark: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["save"]);

const form = reactive({
  id: null,
  title: "",
  url: "",
  description: "",
  type: "website",
  favorite: false,
});

watch(
  () => props.bookmark,
  (bookmark) => {
    if (bookmark) {
      Object.assign(form, bookmark);
    }
  },
  { immediate: true }
);


function submit() {
  emit("save", {
  id: form.id,
  title: form.title,
  url: form.url,
  description: form.description,
  type: form.type,
  favorite: form.favorite,
});

  form.title = "";
  form.url = "";
  form.description = "";
  form.type = "website";
  form.favorite = false;form.id = null;
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
  {{ form.id ? "Update Bookmark" : "Save Bookmark" }}
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
