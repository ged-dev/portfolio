import React from "react"
import { Link } from "gatsby"
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap"
const Contact = () => (
    <section id="contact" className="blockA">
      <h2>Contact</h2>
      <Form method="post" action="#">

        <FormGroup>
          <FormLabel>
            Name
            <input type="text" name="name" id="name" />
          </FormLabel>
        </FormGroup>

        <FormGroup>
          <FormLabel>
            Email
            <input type="email" name="email" id="email" />
          </FormLabel>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            Subject
            <input type="text" name="subject" id="subject" />
          </FormLabel>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            Message
            <textarea name="message" id="message" rows="5" />
          </FormLabel>
        </FormGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

        <Link to="/">Go Up 🔼</Link>
    </section>
)

export default Contact