// effects/TypewriterText.jsx
import { Typewriter as TypewriterEffect } from 'react-simple-typewriter';

const TypewriterText = () => (
  <span className="inline-block text-accent">
    <TypewriterEffect
      words={[
        'Frontend Developer.',
        'Backend Developer.',
        'Android Developer.',
      ]}
      loop
      cursor
      cursorStyle="_"
      typeSpeed={125}
      deleteSpeed={100}
      delaySpeed={1500}
    />
  </span>
);

export default TypewriterText;
