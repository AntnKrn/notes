import { useSelector } from 'react-redux';
import { Global } from './style';
import { RootState } from '../store/store';
import { Notes } from './Notes';

const App = () => {
  const theme = useSelector((state: RootState) => state.theme.isDark);

  return (
    <>
      <Global $theme={theme} />
      <Notes />
    </>
  );
};

export default App;
