<script lang="ts" setup>
import { computed, ref } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import { useTodoStore } from "../../stores/todo";

const todoStore = useTodoStore();
const { submitTodo, removeTodo } = todoStore;
const { todos, currentTask } = storeToRefs(todoStore);
const filter = ref("all");

const todoList = computed(() =>
  filter.value === "completed"
    ? todoStore.completed
    : filter.value === "active"
    ? todoStore.active
    : todos.value
);
</script>

<template>
  <div id="app" class="container" style="max-width: 500px; margin-top: 30px">
    <h1>To Do List</h1>

    <div>
      <input type="text" v-model="currentTask" style="border: 1px solid #000000" />
      <input
        type="submit"
        value="Tambah"
        style="background-color: #242121; border: 0"
        @click="submitTodo"
      />
    </div>

    <ol>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.task }}
        <button
          @click="removeTodo(index)"
          style="background-color: #242121; border: 0"
        >
          Hapus
        </button>
      </li>
    </ol>
  </div>
</template>

<style>
.container {
  max-width: 960px;
  margin: 0 auto;
}
h1 {
  color: #000000;
  text-align: center;
  font-size: 30px;
}
</style>


