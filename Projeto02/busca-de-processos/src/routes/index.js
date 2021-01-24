import App from '../App';
import Listar from '../components/Processo/Listar';
import Cadastrar from '../components/Processo/Cadastrar';

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
        component: Cadastrar
    }
]

export default routes;