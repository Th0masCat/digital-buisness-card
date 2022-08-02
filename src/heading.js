import logo from "./image.jpg"

function Heading(){
    return(
    <div className="heading">
        <img src= {logo} alt="image" className="profile_image"></img>
        <h1 className="name">Laura Smith</h1>
        <h2 className="frontend_developer">Frontend Developer</h2>
        <h3 className="website">laurasmith.website</h3>
    </div>
    )
}

export default Heading;