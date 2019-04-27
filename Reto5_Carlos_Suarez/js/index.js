Vue.component("tr-factura", {
    props: ["fact"],
    data: function() {
      
      return {
        likes: 300
      };
    },
    methods: {
      addCant: function() {
        app.total = 0;
        app.factura.forEach(element => {
            app.total = app.total + ( element.precio* element.cantidad);     
        });
        app.iva = app.total*0.19;
      }
    },
    template: `
    <ul class="list-group list-group-horizontal">
        <li class="list-group-item col-md-2">{{fact.nombre}}</li>
        <li class="list-group-item col-md-2"><input @change="addCant()" type="number" v-model="fact.cantidad" /></li>
        <li class="list-group-item col-md-2"><input @change="addCant()" type="number" v-model="fact.precio" /></li>
        <li class="list-group-item col-md-2">{{fact.precio*fact.cantidad}}</li>
    </ul>`
    
  });
var app = new Vue({
    el: "#app",
    data: {
      items:[{nombre:"Articulo",cantidad:"1",precio:"100"}],
      factura: [],
      total: 0,
      iva:0
    },
    methods: {
      changeselect: function(id) {
        console.log(id);
      },
      addItem: function(items) {
        this.factura.push({ nombre: items[0].nombre, cantidad: items[0].cantidad,precio:items[0].precio });
        this.total = this.total + (items[0].precio*items[0].cantidad); 
        this.iva = this.total*0.19;
      }
    }
  });