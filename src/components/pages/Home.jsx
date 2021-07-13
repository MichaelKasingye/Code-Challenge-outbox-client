import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { useStateValue } from "../ContextAPI/StateProvider";

function Home() {
  const [{ user }] = useStateValue();

  const signedOut = auth.signOut();
  return (
    <div className="home">
      <h1>Code Challenge</h1>

      {!signedOut ? (
        <button>
          <Link style={{ color: "white" }} to="/login">
            Sign Up
          </Link>
        </button>
      ) : (
        <div>
          <h4>Wellcome </h4> <h6>{user}</h6>
          <p style={{ fontSize: "1.5rem" }}>
            View more of the site from the links above
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
