import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

import app from "../../Firebase/firebaseConfig";
import { Link } from "react-router-dom";
import { useState } from "react";
import GoogleSignIn from "./GoogleSignIn/GoogleSignIn";



const auth = getAuth(app);

const Login = () => {

    const [user, setUser] = useState(null)



    const handleLoginButton = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // const userInfo = { email, password }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser)
                setUser(logedUser)



            })
            .catch(error => {
                console.error(error)

            })

        form.reset()
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
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <GoogleSignIn></GoogleSignIn>
                    <div className="divider divider-horizontal"><span className="text-cyan-500 font-semibold font-xl">OR</span></div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleLoginButton} className="card-body">
                            <h1 className="text-5xl font-bold">Login</h1>

                            {user &&
                                <div className="flex justify-center items-center gap-7">
                                    <div>
                                        <h3 className="text-lg">User Name: <span className="badge badge-lg">{user?.displayName}</span></h3>
                                        <h3 className="text-lg">User Email: <span className="badge badge-lg">{user?.email}</span></h3>
                                    </div>


                                </div>


                            }
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" required className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                {
                                    user ? <button onClick={handleSignOut} className="btn btn-primary">Log out</button> :
                                        <button className="btn btn-primary">Login</button>
                                }







                            </div>
                            {/* <div>
                                <p> <span className="badge badge-lg">{error}</span></p>
                                <p> <span className="badge badge-lg">{success}</span></p>
                            </div> */}
                            <div className="form-control mt-6">
                                <p className="">new to this website? Please <Link to='/signup'><span className="no-underline hover:underline text-green-300" >register</span></Link> </p>
                            </div>

                        </form>
                    </div>
                </div>

            </div >
        </>
    );
};

export default Login;