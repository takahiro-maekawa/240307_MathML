import { MathJax} from "better-react-mathjax";

export default function SampleView() {
  return(
  <MathJax style={{ fontSize: "30px" }}>
    {`$$x = \\frac{-b\\pm\\sqrt{b^{2}-4ac}}{2a} \\tag{1}$$`}
    {`$$\\displaystyle \\lim _{x \\rightarrow 1} \\left( \\frac{2}{x-1} - \\frac{x+5}{x^3 -1} \\right)\\; \\tag{2}$$`}
  </MathJax>
);
}