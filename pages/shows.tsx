import React from 'react';
import Auth0Layout from '@components/Auth0Layout';

// Auth0 API
import useApi from '../lib/use-api';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

// ATELIER® Design System
import { Container } from '@atelier/container';
import { Heading } from '@atelier/heading';
import { Paragraph } from '@atelier/paragraph';

type TVShow = { show: { name: string } };

export default withPageAuthRequired(function TvShows(): React.ReactElement {
  const { response, error, isLoading } = useApi('/api/shows');

  return (
    <Auth0Layout>
      <Container>
        <Heading size="1" css={{ fontFamily: '$inter', color: '$gray12' }}>
          TV Shows
        </Heading>

        {isLoading && <Paragraph css={{ fontFamily: '$inter', color: '$gray12' }}>Loading TV shows...</Paragraph>}

        {response && (
          <>
            <Paragraph css={{ fontFamily: '$inter', color: '$gray12' }}>My favourite TV shows:</Paragraph>
            <pre>
              {JSON.stringify(
                response.shows.map((s: TVShow) => s.show.name),
                null,
                2,
              )}
            </pre>
          </>
        )}

        {error && (
          <>
            <Paragraph css={{ fontFamily: '$inter', color: '$gray12' }}>Error loading TV shows</Paragraph>
            <pre style={{ color: 'red' }}>{JSON.stringify(error, null, 2)}</pre>
          </>
        )}
      </Container>
    </Auth0Layout>
  );
});
