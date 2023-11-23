import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../pages/hooks/useAuth";
import useAxiosPublic from "../../pages/hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo ={
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn text-md mb-4 mx-8">
        <FaGoogle className="text-yellow-500"></FaGoogle>
        Log in With Google
      </button>
    </div>
  );
};

export default SocialLogin;
