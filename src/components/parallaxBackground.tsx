import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import '../styles/paralax.css';
const ParallaxBackground = () => {
 const { scrollYProgress } = useScroll();
 const x = useSpring(scrollYProgress, { damping: 60 });
 const mountain3Y = useTransform(x, [0, 1.5], ['0%', '90%']);
 const planetsX = useTransform(x, [0, 1.5], ['0%', '-20%']);
 const planetsY = useTransform(x, [0, 1.5], ['0%', '-200%']);
 const mountain2Y = useTransform(x, [0, 1.5], ['0%', '50%']);
 const mountain1Y = useTransform(x, [0, 1.5], ['0%', '0%']);

 return (
  <section className="paralax">
   <div className="paralax__container">
    {/* Background Sky */}
    <div className="paralax__bg sky" />
    {/* Mountain Layer 3 */}
    <motion.div
     className="paralax__bg layer-4"
     style={{
      y: mountain3Y,
     }}
    />
    {/* Planets */}
    <motion.div
     className="paralax__bg layer-3"
     style={{
      x: planetsX,
      y: planetsY,
     }}
    />
    {/* Mountain Layer 2 */}
    <motion.div
     className="paralax__bg layer-2"
     style={{
      y: mountain2Y,
     }}
    />
    {/* Mountaine Layer 1 */}
    <motion.div
     className="paralax__bg layer-1"
     style={{
      y: mountain1Y,
     }}
    />
   </div>
  </section>
 );
};

export default ParallaxBackground;
