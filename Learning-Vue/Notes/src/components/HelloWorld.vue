<script setup>
import {ref} from "vue"

const showModal = ref(false)
const newNote = ref("")
const notes = ref([])

function getRandomColor() {
  const color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  return color;
}

const addNote = () => {
  if(newNote.value.length < 10){
    return
  }
  notes.value.push({
    id: Math.floor(Math.random() * 100000),
    text: newNote.value,
    color: getRandomColor(),
    date: new Date()
  })
  showModal.value = false;
  newNote.value = ""
}

const deleteNote = (id) => {
  notes.value = notes.value.filter((note) => note.id !== id);
};

</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <p @click="showModal = false">x</p>
        <textarea v-model="newNote" maxlength="120"/>
        <button @click="addNote">Add Note</button>
      </div>
    </div>
    

    <div class="container">

      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>


      <div class="cards-container">
        <div v-for="note in notes" :key="note.id" class="card" :style="{ backgroundColor: note.color }">
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString("en-US") }}</p>
          <button @click="deleteNote(note.id)" class="delete">Delete</button>
        </div>
      </div>


    </div>
  </main>
</template>

<style scoped>
  .container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto
  }

  h1 {
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 75px;
  }

  .card {
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .main-text {
    line-height: 1.25;
    font-size: 17.5px;
    font-weight: bold;
  }

  .date {
    font-size: 12.5px;
    margin-top: auto;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header button {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(21, 20, 20);
    border-radius: 1000px;
    color: white;
    font-size: 20px;
  }
  .cards-container {
    display: flex;
    flex-wrap: wrap;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  main {
    height: 100vh;
    width: 100vw;
  }

  .modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blueviolet;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;

  }

  .modal p {
    margin-left: auto;
    font-size: 20px;
    z-index: 100000;
    cursor: pointer;
  }

  textarea {
    width: 100%;
    height: 200px;
    padding: 5px;
    font-size: 20px;
  }

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


<!-- <script setup>
import { ref } from "vue";
import Header from "./Header.vue";
import NotesContainer from "./NotesContainer.vue";
import NoteModal from "./NoteModal.vue";

const showModal = ref(false);
const newNote = ref("");
const notes = ref([]);

const addNote = () => {
  if(newNote.value.length < 10){
    return
  }
  notes.value.push({
    id: Math.floor(Math.random() * 100000),
    text: newNote.value,
    color: getRandomColor(),
    date: new Date()
  })
  showModal.value = false;
  newNote.value = ""
}

const deleteNote = (id) => {
  notes.value = notes.value.filter((note) => note.id !== id);
};
</script>

<template>
<div>
  <Header @openModal="showModal = true" />
  <NotesContainer :notes="notes" @deleteNote="deleteNote" />
  <NoteModal :showModal="showModal" @closeModal="showModal = false" @addNote="addNote" v-model:newNote="newNote" />
</div>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}
</style> -->