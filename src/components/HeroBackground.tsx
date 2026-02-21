import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroBackgroundProps {
    leftImage: string;
    rightImage: string;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ leftImage, rightImage }) => {
    const { scrollY } = useScroll();

    // Smooth parallax translations
    const y1 = useTransform(scrollY, [0, 1000], [0, -120]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -60]);

    // Higher opacity for a very prominent, "close" feel
    const opacity1 = useTransform(scrollY, [0, 400], [0.4, 0]);
    const opacity2 = useTransform(scrollY, [0, 400], [0.3, 0]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            {/* Soft Ambient Glows */}
            <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-primary/15 blur-[130px] rounded-full animate-pulse" />
            <div className="absolute bottom-[15%] right-[15%] w-[500px] h-[500px] bg-blue-500/15 blur-[110px] rounded-full" />

            {/* Background Portrait 1 (Left) - More central and clear */}
            <motion.div
                style={{ y: y1, opacity: opacity1 }}
                className="absolute -left-10 md:left-[6%] top-[2%] w-[550px] md:w-[850px] aspect-[4/5] filter-none"
            >
                <div
                    className="w-full h-full bg-cover bg-center brightness-[1.1] saturate-[1.15]"
                    style={{
                        backgroundImage: `url('${leftImage}')`,
                        maskImage: 'radial-gradient(circle at 45% 40%, black 20%, transparent 90%)',
                        WebkitMaskImage: 'radial-gradient(circle at 45% 40%, black 20%, transparent 90%)'
                    }}
                />
            </motion.div>

            {/* Background Portrait 2 (Right) - More visible */}
            <motion.div
                style={{ y: y2, opacity: opacity2 }}
                className="absolute -right-20 md:right-[2%] bottom-[-5%] w-[600px] md:w-[900px] aspect-[4/5] filter blur-[0.5px]"
            >
                <div
                    className="w-full h-full bg-cover bg-center brightness-[0.9] saturate-[1.05]"
                    style={{
                        backgroundImage: `url('${rightImage}')`,
                        maskImage: 'radial-gradient(circle at 50% 50%, black 10%, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 10%, transparent 80%)'
                    }}
                />
            </motion.div>

            {/* Global Overlay - Ensuring text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/20 via-background-dark/50 to-background-dark" />
        </div>
    );
};

export default HeroBackground;
