<script >

import OpenAI from "openai";

export default {
  data() {
    return {
      response: '',
      userQuestion:'',
      openai: new OpenAI({
        baseURL: 'https://api.deepseek.com/v1',
        apiKey:  import.meta.env.VITE_DEEPSEEK_API_KEY,// 注意：不要在前端硬编码密钥
        dangerouslyAllowBrowser: true 
      })
    }
  },
  methods: {
    async askAI() {
      const completion = await this.openai.chat.completions.create({
        messages: [{ 
          role: "user", 
          content: this.userQuestion 
        }],
        model: "deepseek-chat",
      });
      this.response = completion.choices[0].message.content;
    }
  }
}
</script>

<template>
  <div>
    <input v-model="userQuestion" placeholder="输入问题...">
    <button @click="askAI">提问</button>
    <div>{{ response }}</div>
  </div>
</template>
<style scoped>

</style>