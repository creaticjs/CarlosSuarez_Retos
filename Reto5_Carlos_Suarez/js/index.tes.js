Vue.component("super-componente", {
    props: ["nombre"],
    data: function() {
      return {
        likes: 300
      };
    },
    methods: {
      addLike: function() {
        this.likes++;
      }
    },
    template: `<div style="border: 1px solid blue;" class="col-md-6">
          <h3>Soy un super componente y me llamo {{ nombre }} 🍉</h3>
          <button @click="addLike()">👍 Likes {{ likes }}</button>
      </div>`
  });
  
  Vue.component("v-select", VueSelect.VueSelect);
  var app = new Vue({
    el: "#app",
    data: {
      items:[{nombre:"",cantidad:"",precio:""}],
      estudiantes: [
        { id: 1, nombre: "Edwin Ordoñez" },
        { id: 2, nombre: "David Mosquera" },
        { id: 3, nombre: "Jhonatan Sosapanta" }
      ],
      estudiante_id: 0,
      estudiante: {}
    },
    methods: {
      changeselect: function(id) {
        console.log(id);
      },
      addSuper: function() {
        this.estudiantes.push({ id: 0, nombre: "rnensndsnd" });
      }
    }
  });