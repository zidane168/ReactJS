import React, { PureComponent } from 'react';

class Header extends PureComponent {  
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <a className="navbar-brand" href="vnexpress.net"  target="_blank"> Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="vnexpress.net"  target="_blank" >Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="vnexpress.net"  target="_blank" >Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="vnexpress.net"  target="_blank" >Pricing</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="vnexpress.net"  target="_blank"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="vnexpress.net">Action</a>
                        <a className="dropdown-item" href="vnexpress.net">Another action</a>
                        <a className="dropdown-item" href="vnexpress.net">Something else here</a>
                        </div>
                    </li>
                    </ul>
                </div>
                </nav>
        );
    }
}

export default Header;