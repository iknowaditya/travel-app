import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import HeroImg from "../Assets/2.jpg"
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";


function Home(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg={HeroImg}
        title="Your Journey Your Story"
        text="Choose Your Favorite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"/>
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    );
    
}

export default Home;