<template>
  <header>
    <nav>
      <ul>
        <li @click="setAdminRole">Admin</li>
        <li @click="setUser1Role">User1</li>
        <li @click="setUser2Role">User2</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    setAdminRole() {
      this.$emit("setUserRole", "admin");
    },
    setUser1Role() {
      this.$emit("setUserRole", "user1");
    },
    setUser2Role() {
      this.$emit("setUserRole", "user2");
    },
  },
};
</script>
