import React, { PureComponent } from 'react';

class Header extends PureComponent {  
    render() {
        return (

            // <div> 
            //     <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
            //         <a class="navbar-brand" href="#">Navbar</a>
            //         <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            //             aria-expanded="false" aria-label="Toggle navigation"></button>
            //         <div class="collapse navbar-collapse" id="collapsibleNavId">
            //             <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            //                 <li class="nav-item active">
            //                     <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            //                 </li>
            //                 <li class="nav-item">
            //                     <a class="nav-link" href="#">Link</a>
            //                 </li>
            //                 <li class="nav-item dropdown">
            //                     <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            //                     <div class="dropdown-menu" aria-labelledby="dropdownId">
            //                         <a class="dropdown-item" href="#">Action 1</a>
            //                         <a class="dropdown-item" href="#">Action 2</a>
            //                     </div>
            //                 </li>
            //             </ul>
            //             <form class="form-inline my-2 my-lg-0">
            //                 <input class="form-control mr-sm-2" type="text" placeholder="Search" />
            //                 <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            //             </form>
            //         </div>
            //     </nav>
            // </div>
           
            
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