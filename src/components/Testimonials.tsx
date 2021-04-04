import React from 'react'
import { v4 } from 'uuid'

type IProps = {
  quote: string
  author: string
}
const Testimonials = ({ testimonials }: {testimonials: IProps[]}) => (
  <div>
    {testimonials.map((testimonial) => (
      <article key={v4()} className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)

export default Testimonials
