import React, { useContext, useEffect, useState } from "react";
import UseAxios from '../Utils/UseAxios'
import AuthContext from "../Context/AuthContext";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import bg from '../assets/bg.jpg'

const SwalInstance = withReactContent(Swal);


const MyProfile = () => {

  const axiosInstance = UseAxios();

  const {user, logoutUser} = useContext(AuthContext)

  const [profile, setProfile] = useState( {
    id: user?.user_id || null,
    full_name: user?.full_name || '',
    bio: user?.bio || '',
    image: null,
  });


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get(`profile/${user?.user_id}/`);
        setProfile({
          id: response.data.id,
          full_name: response.data.full_name,
          bio: response.data.bio,
          image: response.data.image,
        });
      } 
      catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setProfile((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('full_name', profile.full_name);
    formData.append('bio', profile.bio);
    if (profile.image) {
      formData.append('image', profile.image);
    }
    
    try {
      await axiosInstance.patch(`/profile/${profile.id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      SwalInstance.fire({
        title: "Profile Updated, Please Login Again",
        icon: "info",
        toast: true,
        timer: 6000,
        position: 'bottom-right',
        timerProgressBar: true,
        showConfirmButton: false,
      })
      logoutUser();
      
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };


  
  return (
    <div className="container-fluid" style={{ backgroundImage:`url(${bg})`, backgroundSize:"cover", backgroundPosition:"center", height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="card p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '20px', width: '80%', maxWidth: '600px' }}>
            <div className="row">
                <div className="col-md-6">
                    <img src={`http://127.0.0.1:8000/media/${user.image}`}className="img-fluid rounded-circle" alt="profilePicture" />
                </div>
                <div className="col-md-6">
                    <h2 className="mb-4 text-center">Profile Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label>Full Name</label><br />
                            <input
                            type="text"
                            name="full_name"
                            value={profile.full_name}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label>About</label><br />
                            <input
                            type="text"
                            name="bio"
                            value={profile.bio}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Profile Picture</label><br />
                            <input
                            type="file"
                            name="ppf"
                            onChange={handleImageChange}
                            />
                        </div>
                        <button type="submit" className="btn mt-2" style={{width: "100%", backgroundColor: "#26619c", color: "#ffff"}}>Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MyProfile;
