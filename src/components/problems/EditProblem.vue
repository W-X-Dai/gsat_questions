<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <label for="content">題目內容</label>
      <v-md-editor v-model="question.content" style="height: 500px;"/>

      <label for="answer">解答</label>
      <v-md-editor v-model="question.answer" style="height: 500px;"/>      

      <br>
      <label for="subject">題型</label>
      <select v-model="question.type">
        <option v-for="(option, index) in typeList" :key="index" :value="option">{{ option }}</option>
      </select>

      <label for="tags">Tags</label>
      <input v-model="question.tags" type="text" placeholder='請輸入標籤，請以","間隔'/>

      <label for="tags">來源</label>
      <input v-model="question.source" type="text" placeholder='請輸入來源，如：108學測'/>

      
      <input type="submit" value="Submit" name="submit">
      <p v-if="showText">處理中，請稍候</p>
      <br> <br>
    </form>
  </div>
</template>

<script>
import { db } from "@/config/firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore"; 
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


export default {
  data() {
    return {
      question: {
        content: '',
        answer: '',
        type: '',
        tags: '',
      },
      typeList: ['單選','多選','選填','計算'],
      showText: 0,
    }
  },

  mounted(){
  },
  methods: {
    submitForm(){
      this.showText=1;
      const docRef =  addDoc(collection(db,"questions"), {
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        content: this.question.content,
        answer: this.question.answer,
        tags: this.question.tags,
        type: this.question.type,
			});
			alert("成功新增", docRef.id);
      this.$router.push("/upload");
    }
  }
}
</script>

<style>
* {box-sizing: border-box;}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.v-md-editor{
  height: 300px;
}


.container {
	border-radius: 5px;
	background-color: #f2f2f2;
	padding: 20px;
	max-width: 1500px;
	margin: 0 auto;
	font-family: Arial, Helvetica, sans-serif;  
}

</style>
