import { MathJaxContext } from "better-react-mathjax";
const config = {
  "fast-preview": {
    disabled: true
  },
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  },
  messageStyle: "none"
};

export default function ConfigMathJaxContext({children}) {
return (
  <MathJaxContext config={config}>
    {children}
  </MathJaxContext>
)
} 