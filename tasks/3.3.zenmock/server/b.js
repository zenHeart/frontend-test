module.exports = {
  req: {
    method: 'post',
  },
  resp: {
    header: {
      token: /\w{10}/,
    },
    body: {
      code: 0,
      msg: 'success',
      data: {
        info: [1, 2],
      },
    },
  },
};
