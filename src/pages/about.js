import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Us</h1>
    <p>Learn more about Deleens Home Bake. (Placeholder for company history)</p>
    <h2>Meet the Team</h2>
    <div className="team">
      <div className="team-member">
        <img src="https://via.placeholder.com/150" alt="Team Member 1" />
        <p>Team Member 1</p>
      </div>
      <div className="team-member">
        <img src="https://via.placeholder.com/150" alt="Team Member 2" />
        <p>Team Member 2</p>
      </div>
      <div className="team-member">
        <img src="https://via.placeholder.com/150" alt="Team Member 3" />
        <p>Team Member 3</p>
      </div>
    </div>
    <h2>Customer Testimonials</h2>
    <p>Read what our customers have to say. (Placeholder for customer testimonials)</p>
  </Layout>
)

export default AboutPage
