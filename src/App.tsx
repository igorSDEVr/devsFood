import * as C from './AppStyles';
import { Theme } from './components/Theme';
import { Cart } from './components/Cart';
import { RoutesComp } from './routes';

export const App = () => {

  return (
    <C.Container>
      <Theme />
      <C.PageBody>
        <RoutesComp />
      </C.PageBody>
      <Cart />
    </C.Container>
  );
};