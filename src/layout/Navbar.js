import React, { useEffect } from 'react';

const Navbar = () => {

    useEffect(() => {
        const M = window.M;
        let elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
        
    }, []);

    return (
        <div>
            <nav className="grey darken-4">
                <div className="container nav-wrapper">
                    <a href="/" className="brand-logo">Fourier</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">Theory</a></li>
                        <li><a href="/fourier">Function</a></li>
                        <li><a href="/">Draw</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="/">Theory</a></li>
                <li><a href="/fourier">Function</a></li>
                <li><a href="/">Draw</a></li>
            </ul>
        </div>
    )
}

export default Navbar;