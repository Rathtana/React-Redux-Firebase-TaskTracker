import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth } = props;
    // if uid exist, then the user is signed in 
    // if uid exist, then the user is signed in 
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        <nav className="grey darken-3">
            <div className="nav-wrapper container">
                <Link to="/" className="brand-logo">MarioPlan</Link>
                {/* wait till firebase auth isLoaded  */}
                {auth.isLoaded && links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar);