<template>
    <div class="card" :style="{ backgroundColor: note.color }">

      <button @click="$emit('deleteNote')" class="delete">Delete</button>
    </div>
  </template>
  
  <script setup props="['note']">

  </script>
  
  <style scoped>
  .card button {
    margin-top: 10px;
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: white;
  }

  .card button.delete {
    background-color: crimson;
  }
  </style>
  