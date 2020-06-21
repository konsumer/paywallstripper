import React from 'react'
import { Jumbotron, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Head from 'next/head'
import Router from 'next/router'

import Page from './_components/Page'

export default () => {
  const onSubmit = e => {
    e.preventDefault()
    Router.push(`/read/${encodeURIComponent(e.target.url.value)}`)
  }
  return (
  <Page>
    <Jumbotron fluid>
      <Container fluid>
        <p className="lead">Use this tool to step paywalls and ads from articles. Currently, it only supports washingtonpost, but more will be added.</p>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label>URL</Label>
            <Input name='url'></Input>
          </FormGroup>
          <Button>Strip</Button>
        </Form>
      </Container>
    </Jumbotron>
  </Page>
)
}