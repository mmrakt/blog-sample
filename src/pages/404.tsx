import React from 'react'
import MediaQuery from 'react-responsive'
import Header from '../components/Header'
import Footer from '../components/Footer'

const NotFoundPage = () => (
  <>
    <Header />
    <main className="bg-gray-100 px-3 py-10">
      <h1 className="text-3xl text-center">
        お探しのページが見つかりませんでした
      </h1>
      <div className="mt-10 text-center text-lg">
        <MediaQuery maxWidth={980}>
          <p>
            アクセスしたページは削除またはURLが変更されていたため表示することができませんでした。
          </p>
        </MediaQuery>
        <MediaQuery minWidth={981}>
          <p>アクセスしたページは削除またはURLが変更されていたため</p>
          <p>表示することができませんでした。</p>
        </MediaQuery>
      </div>
    </main>
    <Footer />
  </>
)

export default NotFoundPage
