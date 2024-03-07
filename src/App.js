import SampleView  from './components/SampleView';
import { MathJaxContext } from "better-react-mathjax";

const App = () => {
  return (
    <MathJaxContext>
      <h1>以下が数式の一覧となります。</h1>
      <SampleView/>
    </MathJaxContext>
  );
};

export default App;