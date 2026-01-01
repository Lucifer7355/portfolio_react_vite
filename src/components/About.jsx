import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <blockquote className="about-quote">
            <h5 className="light">
              A passionate backend developer and data engineer focused on building scalable systems, real-time data pipelines, and AI-driven solutions to real-world problems.
            </h5>
          </blockquote>

          <p>
            I'm a Computer Science graduate from <strong>Galgotias College Of Engineering And Technology, Greater Noida</strong>, with 3+ years of professional experience in software development and data engineering. I specialize in building scalable backend systems, real-time data processing pipelines, and microservices architecture. My expertise spans from crafting high-performance APIs in SpringBoot and Go to designing end-to-end data engineering solutions using Kafka, Flink, and Airflow for processing millions of transactions in real-time.
          </p>

          <p>
            Throughout my career, I've developed a comprehensive skill set across backend development, data engineering, and cloud infrastructure. From optimizing financial transaction workflows that reduced latency by 30% to building production-grade real-time analytics platforms, I've worked on systems handling millions of users. My experience includes stream processing, event-driven architectures, data transformation pipelines, and deploying scalable microservices on Kubernetes and AWS.
          </p>

          <div className="card-panel">
            <h5 className="teal-text">Technical Proficiencies</h5>
            <ul className="browser-default">
              <li><strong>Languages:</strong> Python, Go, Core Java, JavaScript, C, C++, PHP, Bash</li>
              <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Vertica (OLAP), Redis, Elasticsearch</li>
              <li><strong>Data Engineering:</strong> Apache Kafka, Apache Flink, Apache Airflow, dbt, Grafana, Apache Spark</li>
              <li><strong>Libraries:</strong> NumPy, Pandas, OpenCV, React.js</li>
              <li><strong>Frameworks:</strong> Flask, Django, Node.js, Keras, TensorFlow, Bootstrap, SpringBoot</li>
              <li><strong>DevOps & Tools:</strong> Git, Docker, AWS, GCP, Heroku, JIRA, Kubernetes, ELK Stack</li>
            </ul>
          </div>

          <p>
          I'm now seeking an exciting opportunity in software engineering or data engineering—where I can leverage my skills to build reliable, scalable, and efficient solutions that process data in real-time and create real value for millions of users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
