<template>
  <div class="main-admin">
    <Navbar />
    <div class="main-content">
      <Sidebar/>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate deserunt dicta maxime ipsum iusto animi vero quisquam, nisi harum nostrum porro asperiores incidunt accusamus cupiditate quasi, eius quis! Officia, cumque sint qui dignissimos illo quia dolores id voluptatem dolorum culpa laboriosam laudantium enim cum illum iure suscipit, fugiat consequatur harum ea, adipisci veniam ipsa deleniti optio? Vel sit omnis adipisci consequatur odio illo rem repellat dolorum officia. Eligendi cum nam eveniet nisi est rerum veniam! Earum, explicabo voluptatum praesentium iste repellat id sed dolore libero eveniet. Necessitatibus veniam enim voluptate ut ad odit soluta facere libero sed dolore? Aliquam, qui!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique nam numquam aut tempore assumenda corrupti accusamus expedita quis. Veniam obcaecati quibusdam, facilis dolorum assumenda architecto nisi suscipit similique in?</p>
      <!-- <Sidebar /> -->
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
export default {
  name: "AdminView",
  components: {
    Sidebar,
    Navbar,
  },
};
</script>

<style>
.main-admin{
  height: 100%;
  display: flex;
  flex-direction: column;
}

.main-content{
  margin-top: 100px;
  /* padding: 1rem 2rem; */
}

</style>
