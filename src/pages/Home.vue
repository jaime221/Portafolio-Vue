<script setup lang="ts">
import Layout from "../components/layout.vue";
import profile from "../components/profile.vue";
import Banner from "../components/Banner.vue";
import Contacto from "../components/Contact.vue";
import Info from "../components/Info.vue";
import Repositories from "../components/Repositories.vue";
</script>
<template>
  <layout>
    <profile></profile>
    <Info></Info>
    <Repositories></Repositories>
    <Banner></Banner>
    <Contacto></Contacto>
  </layout>
</template>
