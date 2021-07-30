module.exports = ({ env }) => ({
  responses: {
    privateAttributes: ['created_at','updated_at'],
  },
  rest: {
    defaultLimit: 250,
  },
});
