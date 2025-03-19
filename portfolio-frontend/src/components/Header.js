import "../App.cs";

function Header() {
    return (
        <>
            <div className="bg-dark d-flex justify-content-center navbar navbar-expand-lg mb-4" role="navigation">
                <ul className="navbar-nav gap-3">
                    <li className="nav-item"><a class="nav-link" href="./Home">Home</a></li>
                    <li className="nav-item"><a class="nav-link" href="./About">About</a></li>
                    <li className="nav-item"><a class="nav-link" href="./Projects">Projects</a></li>
                </ul>
            </div>
        </>
      );
}

export default Header;