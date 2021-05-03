import React from 'react'
import { navigate } from 'gatsby-link'
import { makeStyles, TextField, Button } from '@material-ui/core'
import Layout from '../../components/Layout'
import PageTitle from '../../components/common/PageTitle'

const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
      marginBottom: '15px',
      width: '100%',
    },
  },
}))

const ContactPage = () => {
  const classes = useStyles()
  const [state, setState] = React.useState({})

  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&')

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout>
      <div className="mt-5">
        <PageTitle title="お問い合わせ" />
        <form
          name="contact"
          method="post"
          action="/"
          className={classes.root}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="bot-field" hidden>
            <input name="bot-field" onChange={handleChange} />
          </label>

          <TextField
            type="text"
            label="お名前"
            variant="outlined"
            name="name"
            onChange={handleChange}
          />

          <TextField
            type="email"
            label="メールアドレス"
            variant="outlined"
            name="email"
            onChange={handleChange}
          />

          <TextField
            name="message"
            label="本文"
            multiline
            rows={4}
            variant="outlined"
            onChange={handleChange}
          />

          <Button type="submit" variant="contained" size="large">
            送信する
          </Button>
        </form>
      </div>
    </Layout>
  )
}

export default ContactPage
