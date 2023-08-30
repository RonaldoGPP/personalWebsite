import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
};

const Project = ({ title, subTitle, link }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return(
        <motion.div variants={projectVariant} className="relative hover:cursor-pointer" onClick={() => window.open(`${link}`,'mywindow')}>
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                    {subTitle}
                </p>
            </div>
            <img  className="flex justify-center items-center p-10
                        max-w-[400px] max-h-[400px]" src={`../assets/${projectTitle}.png`} alt={projectTitle} />
        </motion.div>
    );
};

const Projects = () => {
    return(
        <section id="projects" className="pt-48 pb-48">
            {/* headings */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity:0, y:-50 },
                    visible: { opacity:1, y: 0 }
                }}
                >
                    <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                    <LineGradient width="w-1/3"/>
                    </div>
                    </div>
                    
                    <p className="mt-10 mb-10">
                        This is all the notable projects that I have done.
                    </p>
                </motion.div>
                {/* projects */}
                <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount: 0.5 }}
                    variants={container}
                >
                    {/* row 1 */}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-red
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        Software Developer
                    </div>
                    <Project title="Online Gallery App" subTitle="A downloadable progressive web app I made using python with Flask framework" link="https://github.com/RonaldoGPP/OnlineImageGallery_Flask"/>
                    <Project title="Dummypedia" subTitle="A Social Media I made using MongoDB, ExpressJS, React for the purpose of learning the MERN stack" link="https://github.com/RonaldoGPP/Dummypedia-MERN"/>

                     {/* row 2 */}
                     <Project title="Text and Image Plagiarism Detector" subTitle="A Web Application I made with python Flask framework. This app uses the Jaccard similarity to take hashes from each paragraph to then compare to other documents in the database" link="https://github.com/RonaldoGPP/PlagiarismDetector-JaccardSimilarity-WebApp-Flask"/>
                     <div
                        className="flex justify-center text-center items-center p-10 text-deep-blue bg-white
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        Coming Soon...
                    </div>

                     <div
                        className="flex justify-center text-center items-center p-10 bg-red
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        Driven Individual
                    </div>
                    </motion.div>
                </div>
        </section>
    )
}

export default Projects;