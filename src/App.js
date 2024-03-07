import ConfigMathJaxContext  from './components/ConfigMathJaxContext';
import SampleView  from './components/SampleView';

const App = () => {
  return (
    <ConfigMathJaxContext>
      <h1>数学的概念</h1>
      <SampleView/>
    </ConfigMathJaxContext>
  );
};

export default App;