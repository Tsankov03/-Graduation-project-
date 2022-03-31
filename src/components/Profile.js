import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";


export default function Profile() {
  const { user } = useAuth();
  const history = useHistory();

  const ReturnToChat = () => {
    history.push("/chats");
  };
  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <div className="user-profile-img">
        <img
          alt="profileImg"
          src={user.photoURL}
          className="user-profile-photo"
        ></img>
      </div>

      <div className="middle-container">
        <p> • Display name: {user.displayName}</p>
        <p> • Email: {user.email}</p>
        <p> • User id: {user.uid}</p>
        <div className="return">
          <button className="return" onClick={ReturnToChat}>Return</button>
        </div>
      </div>

    </div>
  );
}
