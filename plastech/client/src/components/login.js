import {GoogleLogin} from 'react-google-login';

const clientId= "316060245169-uphf6d5gfv9n5qs8l1v6i3rpfqdiubo5.apps.googleusercontent.com"




function Login(){

    
    return(


        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}

                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )

}
export default Login