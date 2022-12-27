import * as C from './AppStyles';
import { Theme } from './components/Theme';
import { RoutesComp } from './routes';

export const App = () => {
  return (
    <C.Container>
      <Theme />
      <C.PageBody>
        <RoutesComp />
      </C.PageBody>
    </C.Container>
  );
};