import Footer from "../layout/Footer";
import Header from "../layout/Header";
import ProfileSection from "../layout/AboutMe/ProfileSection";
import Slider from "../layout/AboutMe/Slider";
import MyArchive from "../layout/AboutMe/MyArchive";
import ContactForm from "../layout/Homepage/ContactForm";
export default function AboutIndex() {
    return (
        <div className="flex flex-col bg-[#F3FCF0] min-h-screen w-full">
            <Header />
            <ProfileSection />
            <Slider />
            <MyArchive />
            <ContactForm hasBackground={false} />
            <Footer />
        </div>
    );
}

