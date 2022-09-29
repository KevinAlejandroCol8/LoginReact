
import './App.css';
//import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


function App() {

  
  const responseGoogle = (response) => {
    console.log(response);
    //Aqui va el codigo del redict
    
  }

  return (
    <div className="App">
      <br></br>
      <br></br>
      <GoogleLogin
        clientId="1097986685838-qnp8t414abnngfn128pois76qtnfifm3.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={console.log("Ingreso Acces")}
        cookiePolicy={'single_host_origin'}
      />

      
    </div>
  );
}

export default App;
