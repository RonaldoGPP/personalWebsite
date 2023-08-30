import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Education = () => {
 const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
 justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

 return(
    <section id="education" className="pt-32 pb-16">
        {/* heading */}
        <motion.div
                className="md:w-1/3 text-center md:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity:0, x:-50 },
                    visible: { opacity:1, x: 0 }
                }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5 text-red">
                        EDUCATION
                    </p>
                    <LineGradient width="mx-auto w-2/4"/>
                </motion.div>

                {/* education */}

                <div className="md:flex md:justify-between gap-4">
                    <motion.div
                    className={`bg-blue ${testimonialStyles} before:content-school1`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity:0, scale: 0.8 },
                        visible: { opacity:1, scale: 1 }
                    }}
                    >
                        <p className="font-playfair text-5xl">SMA Jembatan Budaya</p>
                        <p className="text-center text-5md">
                            Senior High School - MIPA                        
                            </p>
                            <p className="text-center text-sm">
                            2017 - 2020
                        </p>
                    </motion.div>


                    <motion.div
                    className={`bg-yellow ${testimonialStyles} before:content-school2`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount: 0.5 }}
                    transition={{ delay:0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity:0, scale: 0.8 },
                        visible: { opacity:1, scale: 1 }
                    }}
                    >
                        <p className="font-playfair text-5xl">Petra Christian University</p>
                        <p className="text-center text-5md">
                            Bachelor's Degree - Computer Science
                        </p>
                        <p className="text-center text-sm">
                            2020 - Present
                        </p>
                    </motion.div>
                </div>
    </section>
 )
}

export default Education;