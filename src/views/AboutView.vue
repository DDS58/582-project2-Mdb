<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ counter.count }}</p>
    <button @click="counter.increment()">Add</button>
    <button @click="counter.decrement()">Remove</button>
    <button @click="custom">Custom</button>
    <h2>Students</h2>
    <p>{{ school.students }}</p>
    <ul>
      <li
        @click="school.addStudent(student)"
        v-for="student in students"
        :key="student.id"
      >
        {{ student.name }} - {{ student.age }}
      </li>
    </ul>
    <h2>Teachers</h2>
    <p>{{ school.teachers }}</p>
    <ul>
      <li
        @click="school.addTeacher(teacher)"
        v-for="teacher in teachers"
        :key="teacher.id"
      >
        {{ teacher.name }} - {{ teacher.age }}
      </li>
    </ul>
    <h2>Users</h2>
    <!-- <p>{{ online.users }}</p> -->
    <ul>
      <li v-for="user in online.users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import { useCounterStore } from "@/store/counter";
import { useSchoolStore } from "@/store/school";
import { useOnlineStore } from "@/store/online";

export default {
  name: "AboutView",
  setup() {
    const counter = useCounterStore();
    const school = useSchoolStore();
    const online = useOnlineStore();
    return { counter, school, online };
  },
  data() {
    return {
      students: [
        { id: 1, name: "John", age: 18 },
        { id: 2, name: "Jane", age: 19 },
        { id: 3, name: "Joe", age: 20 },
      ],
      teachers: [
        { id: 1, name: "Mr. Smith", age: 40 },
        { id: 2, name: "Mrs. Smith", age: 39 },
        { id: 3, name: "Mr. Doe", age: 41 },
      ],
    };
  },
  methods: {
    custom() {
      console.log("custom");
      this.counter.increment();
    },
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        for (let user of json) {
          this.online.addUser(user);
        }
      });
  },
};
</script>
