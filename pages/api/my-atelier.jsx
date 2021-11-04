import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function myady(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res, {
      scopes: ['read:myady']
    });
    const response = await fetch(`https://auth.ady.world`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const myady = await response.json();

    res.status(200).json(myady);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});
