import * as React from "react";
import { motion } from "framer-motion";

/**
 * 3D Tilt Card
 *
 * Adapted from User's Framer Code:
 * A card that tilts in 3D space based on cursor position with glare + shadow effects.
 * Uses framer-motion. Works standalone outside of Framer too.
 */
export default function TiltCard({
  children,
  className = "",
  style = {},
  image,
  tiltFactor = 15,
  perspective = 1000,
  borderRadius = 12,
  backgroundColor = "transparent",
  shadowColor = "rgba(0, 0, 0, 0.2)",
  shadowIntensity = 0.5,
  transitionDuration = 0.2,
  hoverScale = 1.05,
  glareEffect = true,
  glareIntensity = 0.5,
  glarePosition = 50,
  glareSize = 80,
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [tiltValues, setTiltValues] = React.useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const cardRef = React.useRef(null);

  const handleMouseMove = React.useCallback(
    (e) => {
      if (!cardRef.current || !isHovered) return;
      const rect = cardRef.current.getBoundingClientRect();

      // Mouse position relative to card center, range -50 to 50
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 100;

      setMousePosition({ x, y });
      setTiltValues({
        x: -(y / 50) * tiltFactor,
        y: (x / 50) * tiltFactor,
      });
    },
    [isHovered, tiltFactor]
  );

  const handleMouseEnter = React.useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setIsHovered(false);
    setTiltValues({ x: 0, y: 0 });
  }, []);

  // Glare position tracks the mouse
  const glareX = React.useMemo(
    () => (isHovered ? 50 + mousePosition.x / 2 : glarePosition),
    [isHovered, mousePosition.x, glarePosition]
  );
  const glareY = React.useMemo(
    () => (isHovered ? 50 + mousePosition.y / 2 : glarePosition),
    [isHovered, mousePosition.y, glarePosition]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
        cursor: "pointer",
        borderRadius: `${borderRadius}px`,
        overflow: "hidden",
      }}
      animate={{ scale: isHovered ? hoverScale : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={className}
        style={{
          ...style,
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: `${borderRadius}px`,
          overflow: "hidden",
          backgroundColor,
          transformStyle: "preserve-3d",
          boxShadow: `0 10px 30px -10px ${shadowColor}`,
        }}
        animate={{
          rotateX: tiltValues.x,
          rotateY: tiltValues.y,
          boxShadow: isHovered
            ? `0 25px 50px -12px rgba(96, 165, 250, ${shadowIntensity})`
            : `0 10px 30px -10px ${shadowColor}`, // using sky blue for the heavy shadow to fit theme
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {/* Support both the user's requested static image and dynamic children */}
        {image && (
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: `${borderRadius}px`,
              position: "absolute",
              inset: 0,
              zIndex: 0,
            }}
          />
        )}
        
        <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
          {children}
        </div>

        {/* Glare overlay */}
        {glareEffect && (
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 2,
              borderRadius: `${borderRadius}px`,
              background: `radial-gradient(
                circle at ${glareX}% ${glareY}%,
                rgba(255, 255, 255, ${isHovered ? 0.15 : 0}) 0%,
                rgba(255, 255, 255, 0) 60%
              )`,
              pointerEvents: "none",
              mixBlendMode: "overlay",
            }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: transitionDuration }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
