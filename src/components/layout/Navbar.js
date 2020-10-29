import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = () => {
    return (
        <nav className="grey darken-3">
            <div className="nav-wrapper container">
                <Link to="/" className="brand-logo">MarioPlan</Link>
                <SignedInLinks></SignedInLinks>
                <SignedOutLinks></SignedOutLinks>
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        
    }
}
export default connect(mapStateToProps)(Navbar);