import { Link } from 'react-router-dom';
import app from '../../Firebase/firebaseConfig';
import spiderman from '../../assets/images/spiderman2.png'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const auth = getAuth(app)

const SignUp = () => {

    const handleSignUpButton = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password }
        // create user on firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error =>
                console.error(error)
            )

        console.log(user);
        form.reset()
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <img src={spiderman} className="max-w-[468px] rounded-lg shadow-2xl" />
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSignUpButton} className="card-body">
                        <h1 className="text-5xl font-bold">Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                        <div className="form-control mt-6">
                            <p className="">Already Registered? Please <Link to='/login'><span className='underline decoration-dashed'>login</span></Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default SignUp;