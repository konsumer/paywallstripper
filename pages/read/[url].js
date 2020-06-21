import React from 'react'
import { Jumbotron, Container } from 'reactstrap'
import Head from 'next/head'
import MarkDown from 'react-markdown'

import Page from '../_components/Page'

const PageRead = ({ markdown, title, description, image }) => (
  <Page>
    <Head>
      {title && (<meta property="og:title" content={title} />)}
      {description && (<meta property="og:description" content={description} />)}
      {image && (<meta property="og:image" content={image} />)}
      {image && (<meta name="twitter:card" content="summary_large_image" />)}
    </Head>
    <Container id='content'>
      <MarkDown source={markdown} />
    </Container>
  </Page>
)

PageRead.getInitialProps = async ctx => {
  const cheerio = require('cheerio')
  const Turndown = require('turndown')
  const turndown = new Turndown()
  let markdown
  let title
  let description
  let image

  try {
    const headers = {'User-Agent': 'APIs-Google (+https://developers.google.com/webmasters/APIs-Google.html)'}
    const r = await fetch(ctx.query.url, { headers })
    let content = await r.text()
    
    if (ctx.query.url.indexOf('https://www.washingtonpost.com/') === 0) {
      const $ = cheerio.load(content.replace(/image_60w/g, 'image_1024w'))
      $('.author-hover-card').remove()
      $('.subhead').each(function(){
        $(this).html(`<h3>${$(this).html()}</h3>`)
      })
      content = `<h1>${$('h1').text()}</h1>${$('#main-content').html()}\n\n`
      image = $('meta[property="og:image"]').attr('content')
      title=$('meta[property="og:title"]').attr('content')
      description=$('meta[property="og:description"]').attr('content')
    }
    
    markdown = turndown.turndown(content) + `\n\n[original article](${ctx.query.url})`
  } catch(e) {
    console.error(e)
    markdown = `# Error\nSorry, there was an error getting that article.`
  }
  return {
    markdown,
    url: ctx.query.url,
    title,
    description,
    image
  }
}

export default PageRead