module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '478d73caf9fe8c3351164c212b55bb30'),
    },
  },
  url: 'https://technomad.media/api',
});
