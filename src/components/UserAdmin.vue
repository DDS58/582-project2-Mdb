<template>
  <header>
    <nav>
      <ul>
        <li
          @click="setActiveRole('admin')"
          :class="{ active: currentRole === 'admin' }"
        >
          Admin
        </li>
        <li
          @click="setActiveRole('user1')"
          :class="{ active: currentRole === 'user1' }"
        >
          User1
        </li>
        <li
          @click="setActiveRole('user2')"
          :class="{ active: currentRole === 'user2' }"
        >
          User2
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      currentRole: "user1",
    };
  },
  methods: {
    setActiveRole(role) {
      this.currentRole = role;
      this.$emit("setUserRole", role);
    },
  },
};
</script>
