// pages/_document.js

import {CSSReset, ColorModeScript} from '@chakra-ui/react'
import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

import theme from 'styles/theme'

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <CSSReset />
          <ColorModeScript
            initialColorMode={theme.config.initialColorMode}
            type='localStorage'
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
