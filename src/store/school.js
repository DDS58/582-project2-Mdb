import { defineStore } from "pinia";

export const useSchoolStore = defineStore("school", {
  state: () => ({ students: [], teachers: [] }),
  getters: {
    getStudents: (state) => state.students,
    getTeachers: (state) => state.teachers,
  },
  actions: {
    addStudent(student) {
      this.students.push(student);
    },
    addTeacher(teacher) {
      this.teachers.push(teacher);
    },
  },
});
