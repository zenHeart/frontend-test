module.exports = {
  req: {
    method: 'post',
    body: {
      name: 1,
    }
  },
  resp: {
    header: {
      token: /\w{10}/,
    },
    body: {
      code: 1,
      msg: 'success',
      data: {
        info: [1]
      },
    },
  },
};
