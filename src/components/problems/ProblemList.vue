<template>
  <div class="container">
    <h2>Problem List</h2>
    <div 
      v-for="(problem, index) in problems" 
      :key="index" 
      class="problem-item" 
      @click="showDetails(problem)"
    >
      <v-md-editor v-model="problem.content" mode="preview" />
    </div>

    <!-- 浮動視窗 -->
    <div v-if="selectedProblem" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <h3>題目詳細</h3>
        <p><strong>題目：</strong><v-md-editor v-model="selectedProblem.content" mode="preview" /></p>
        <p><strong>答案：</strong><v-md-editor v-model="selectedProblem.answer" mode="preview" /></p>
        <p><strong>來源：</strong>{{ selectedProblem.source }}</p>
        <p><strong>標籤：</strong>{{ selectedProblem.tags.join(', ') }}</p>
        <button @click="closeModal">關閉</button>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/config/firebaseConfig.js'
import { collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      problems: [],
      no: 0,
      selectedProblem: null, // 存儲選中的題目
    }
  },
  methods: {
    async ShowProblems() {
      try {
        const querySnapshot = await getDocs(collection(db, "questions"));
        const questions = [];
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          questions.push({
            id: doc.id,
            timestamp: doc.data().createdAt,
            content: ++this.no + '.' + doc.data().content,
            answer: doc.data().answer,
            source: doc.data().source,
            tags: doc.data().tags,
          });
        });
        this.problems = questions;
        console.log("ok");
      } catch (e) {
        console.log("fail", e);
      }
    },
    showDetails(problem) {
      this.selectedProblem = problem;
    },
    closeModal() {
      this.selectedProblem = null;
    }
  },
  mounted() {
    this.ShowProblems();
  }
}
</script>



<style scoped>
.container {
  background-color: #f2f2f2;
  padding: 20px;
  flex: 1;
  margin: 0 auto;
}
.problem-item {
  cursor: pointer;
  margin-bottom: 10px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  transition: background 0.3s;
}
.problem-item:hover {
  background: #e6e6e6;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
}
button {
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
