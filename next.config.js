const { PHASE_DEVELOPMENT_SERVER } = require( 'next/constants' );

/** @type {import('next').NextConfig} */
const nextConfig = phase =>
{
  if ( phase === PHASE_DEVELOPMENT_SERVER )
  {
    return (
      {
        env: {
          mongodb_username: "admin",
          mongodb_password: "admin",
          mongodb_clustername: "cluster0",
          mongodb_database: "my-site",
        }
      } );
  }

  return (
    {
      env:
      {
        mongodb_username: "otheradmin",
        mongodb_password: "otheradmin",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site",
      }
    }
  );
};

module.exports = nextConfig;
