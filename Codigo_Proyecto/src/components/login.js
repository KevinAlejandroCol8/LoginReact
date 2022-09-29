import { GoogleLogin } from '@react-oauth/google';

const clientId = "1097986685838-qnp8t414abnngfn128pois76qtnfifm3.apps.googleusercontent.com";

function Login(){
    const onSuccess = (res) =>{
        console.log("Login succes", res.progileOnj);
    }

    <div id='sigInButton'>
        <GoogleLogin
            clientId="1097986685838-qnp8t414abnngfn128pois76qtnfifm3.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
      />
    </div>
}