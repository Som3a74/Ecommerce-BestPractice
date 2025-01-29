import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './routers/AppRouter';
import "@styles/global.css";
import { store } from './store';
import { Provider } from 'react-redux'




createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
)
