import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Us</h1>
    <p>Feel free to reach out to us through the following channels:</p>
    <ul>
      <li>Email: contact@deleenshomebake.com</li>
      <li>Phone: (123) 456-7890</li>
      <li>Instagram: <a href="https://www.instagram.com/_deleens/">@_deleens</a></li>
      <li>Facebook: <a href="https://www.facebook.com/profile.php?id=61556402116452">Deleens Home Bake</a></li>
    </ul>
  </Layout>
)

export default ContactPage
