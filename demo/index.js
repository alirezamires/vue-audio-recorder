import { createApp}  from "vue";

import App from "./App.vue";

let app = createApp({
    components: { App },
    template: "<App/>"
});


app.mount("#app");