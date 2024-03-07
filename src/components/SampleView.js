import { MathJax} from "better-react-mathjax";

export default function SampleView() {
  return(      
  <MathJax style={{ fontSize: "20px" }}>
    {`$$x = \\frac{-b\\pm\\sqrt{b^{2}-4ac}}{2a} \\tag{1}$$`}
  </MathJax>
);
}