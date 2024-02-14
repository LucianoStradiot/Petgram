import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

//const clientId = `${import.meta.env.VITE_USER_ID}`;
const ServerConnect = `${import.meta.env.VITE_APP_ID}`;

const Login = () => {
  const onSuccess = (res) => {
    const { email, imageUrl, name } = res.profileObj;

    const formatUser = {
      name,
      mail: email,
      image_url: imageUrl
    };

    console.log('LOGIN SUCCESS! Current user: ', formatUser);

    // eslint-disable-next-line no-debugger
    debugger;
    axios
      .post(`${ServerConnect}/api/v1/user`, formatUser)
      .then((response) => {
        console.log('Solicitud enviada con éxito:', response.data);
        console.log(response.data.data[0].id);
      })
      .catch((error) => {
        console.error('Error al enviar la solicitud:', error);
      });
  };

  const onFailure = (res) => {
    console.log('LOGIN FAILED! res: ', res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
    </div>
  );
};

export default Login;
