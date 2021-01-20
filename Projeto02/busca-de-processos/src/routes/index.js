// import Filme from "../pages/Filme";
// import PageCadastroFilme from "../pages/filme/PageCadastroFilme";
// import PageListaFilme from "../pages/filme/PageListaFilme";

import App from '../App';
import Telefone from '../components/Telefone';
import H1 from '../components/H1';

const routes = [
    {
        path: '/',
        component: App,
        exact: true
    },
    {
        path: '/h1', // path: '/processo/cadastro/:id?',
        component: H1
    }
   ,
    {
        path: '/cadastrar',
        component: Telefone
    }
]

export default routes;