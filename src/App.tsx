import Header from './components/Header';
import MainContainer from './components/MainContainer';
import { songs } from './utilities/data';

function App() {
  return (
    <>
      <Header />
      <MainContainer songs={songs} />
    </>
  );
}

export default App;
