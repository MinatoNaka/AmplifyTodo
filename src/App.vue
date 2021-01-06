<template>
  <div id="nav">
    <ul>
      <li>
        <router-link :to="{ name: 'SignUp' }">SignUp</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'SignIn' }">SignIn</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'CategoryIndex' }">CategoryIndex</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'CategoryCreate' }"
          >CategoryCreate</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'CategoryEdit', params: { categoryId: 1 } }"
          >CategoryEdit</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'TaskIndex', params: { categoryId: 1 } }"
          >TaskIndex</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'TaskCreate', params: { categoryId: 1 } }"
          >TaskCreate</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'TaskEdit', params: { categoryId: 1, taskId: 1 } }"
        >
          CreateaskEdit</router-link
        >
      </li>
    </ul>
    <router-view />
  </div>
</template>
