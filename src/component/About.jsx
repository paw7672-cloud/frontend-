function About() {
  return (
    <section className="about" id="about">

      <div className="section-container">

        <div className="about-content">

          <p className="section-label">
            ABOUT US
          </p>

  <h1 className="text-4xl font-bold text-blue-600">
          Hello Tailwind CSS
        </h1>
          <h2>
            We build modern digital experiences
          </h2>

          <p>
            Our goal is to create simple, powerful and
            user-friendly applications that solve real
            business problems.
          </p>

          <p>
            We focus on clean code, high performance,
            responsive design and excellent user experience.
          </p>

          <button className="primary-button">
            Learn More
          </button>

        </div>

        <div className="about-card">

          <h3>Why Choose Us?</h3>

          <ul>
            <li>✓ Modern Technology</li>
            <li>✓ Clean & Maintainable Code</li>
            <li>✓ Responsive Design</li>
            <li>✓ High Performance</li>
          </ul>

        </div>

      </div>

    </section>
  );
}

export default About;