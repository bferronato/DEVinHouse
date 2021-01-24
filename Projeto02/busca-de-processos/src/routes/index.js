// import Filme from "../pages/Filme";
// import PageCadastroFilme from "../pages/filme/PageCadastroFilme";
// import PageListaFilme from "../pages/filme/PageListaFilme";

import App from '../App';
import Telefone from '../components/Telefone';
import Listar from '../components/Processo/Listar';

const routes = [
    {
        path: '/',
        component: App,
        exact: true
    },
    {
        path: '/listar',
        component: Listar
    }
   ,
    {
        path: '/cadastrar',
        component: Telefone
    }
]

export default routes;