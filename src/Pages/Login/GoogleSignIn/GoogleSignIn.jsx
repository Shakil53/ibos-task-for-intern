
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../../Firebase/firebaseConfig";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";

const auth = getAuth(app)

const GoogleSignIn = () => {

    const [user, setUser] = useState(null)
    // const [error, setError] = useState('')
    // const [success, setSuccess] = useState('')

    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                setUser(loggedInUser)

            })
            .catch(error => {
                console.log('error', error)
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            })
            .catch(error => {
                console.log('error', error)
            })
    }


    return (
        <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold drop-shadow-lg text-emerald-400">Google Sign in</h1>

            {user &&
                <div className="flex justify-center items-center gap-7">
                    <div>
                        <h3 className="text-lg">User Name: <span className="badge badge-lg">{user?.displayName}</span></h3>
                        <h3 className="text-lg">User Email: <span className="badge badge-lg">{user?.email}</span></h3>
                    </div>
                    <div className="avatar online">
                        <div className="w-24 rounded-full">
                            <img src={user?.photoURL} />

                        </div>
                    </div>

                </div>


            }

            <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt exercitationem nostrum.</p>
            <div className="form-control mt-6">


                {user ?
                    <button onClick={handleSignOut} className="btn btn-primary text-white decoration-[#4285F4]"> Sign out</button> :

                    <button onClick={handleGoogleSignIn} className="btn btn-primary text-white decoration-[#4285F4]"><FaGoogle></FaGoogle> Sign in with Google</button>
                }





            </div>
        </div>
    );
};

export default GoogleSignIn;