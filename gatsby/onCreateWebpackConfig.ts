const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          stats: {
            children: true,
          },
        },
      ],
    },
  })
}

export default onCreateWebpackConfig
