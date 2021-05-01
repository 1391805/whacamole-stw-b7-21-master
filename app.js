// This is the main instance
const rootComponent = {
  template: `<div style="display: flex; flex-wrap: wrap">
   <mole></mole><mole></mole><mole></mole>
   <mole></mole><mole></mole><mole></mole>
  </div>`,
};
const moleComponent = {
  //TODO
  template: ` `
};


//Fem servir el rootComponent com ha punt dinici per poder fer el renderitzat.(DOM virtual)
const app = Vue.createApp(rootComponent);
app.component('mole', moleComponent);
const vm = app.mount("#app");
