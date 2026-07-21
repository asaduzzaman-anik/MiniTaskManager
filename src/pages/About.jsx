function About() {
  return (
    <section className="page about-page">
      <h1>About</h1>
      <p>
        Mini Task Manager is a small React practice app built for Module 27.
        It demonstrates core React concepts: state and immutability, refs,
        effects with API calls, React Router, and the Context API for theme
        switching.
      </p>
      <ul className="about-list">
        <li>Add and toggle tasks with immutable state updates</li>
        <li>Fetch sample todos from a public API on load</li>
        <li>Switch between light and dark themes</li>
      </ul>
    </section>
  );
}

export default About;
