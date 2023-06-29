import contentful from 'contentful-management'

const { env } = process

// エラーが発生したときにCatchできるようにする。
process.on('unhandledRejection', console.dir)

// contentful-management用クライアントを作成する。

const client = contentful.createClient({
  accessToken: env.CONTENTFUL_MANAGEMENT_API_TOKEN,
})
;(async () => {
  const space = await client.getSpace(env.CONTENTFUL_SPACE_ID)
  const environment = await space.getEnvironment('master')

  try {
    for (let i = 6; i <= 30; i += 1) {
      /* eslint-disable no-await-in-loop */
      const draftEntry = await environment.createEntry('post', {
        fields: {
          title: {
            'en-US': `テスト記事${i}`,
          },
          slug: {
            'en-US': `test-post-${i}`,
          },
          content: {
            'en-US':
              'ほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふが',
          },
          excerpt: {
            'en-US':
              'ほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふが',
          },
          date: {
            'en-US': '2021-08-07T00:00+09:00',
          },
        },
      })
      const publishedEntry = draftEntry.publish()
      console.log(`${publishedEntry}  is published!`)
    }
  } catch (err) {
    console.error(err)
  }
})()
