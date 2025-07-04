export const signin = async (email, password) => {
  try {
    const response = await fetch(
      ' https://localhost:3000/signin',

      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error('=== error ===', error);
  }
};

export const signup = async (email, password) => {
  try {
    const response = await fetch(
      'https://localhost:3000/signup',

      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.error('=== error ===', error);
  }
};

export const getUserInfo = async () => {
  try {
    const response = await fetch(
      'https://localhost:3000/user/me',

      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.error('=== error ===', error);
  }
};
