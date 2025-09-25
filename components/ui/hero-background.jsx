"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const gridOpacity = useTransform(springY, [0, 1000], [0.05, 0.15]);
  const shapeScale = useTransform(springX, [0, 1000], [1, 1.1]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x, y });
    };

    const heroSection = document.querySelector('section');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      heroSection.addEventListener('mouseenter', () => setIsHovered(true));
      heroSection.addEventListener('mouseleave', () => setIsHovered(false));

      return () => {
        heroSection.removeEventListener('mousemove', handleMouseMove);
        heroSection.removeEventListener('mouseenter', handleMouseMove);
        heroSection.removeEventListener('mouseleave', handleMouseMove);
      };
    }
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Interactive Grid Pattern */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ opacity: gridOpacity }}
      >
        <defs>
          <motion.pattern
            id="grid"
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
            animate={{
              x: isHovered ? mousePosition.x * 0.02 : 0,
              y: isHovered ? mousePosition.y * 0.02 : 0
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            <motion.path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="rgb(239 68 68)"
              strokeWidth="0.1"
              animate={{
                strokeWidth: isHovered ? 0.15 : 0.1
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.pattern>
          <motion.linearGradient
            id="redGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            animate={{
              x1: isHovered ? `${mousePosition.x * 0.1}%` : "0%",
              y1: isHovered ? `${mousePosition.y * 0.1}%` : "0%",
              x2: isHovered ? `${100 + mousePosition.x * 0.1}%` : "100%",
              y2: isHovered ? `${100 + mousePosition.y * 0.1}%` : "100%"
            }}
          >
            <stop offset="0%" stopColor="rgb(239 68 68)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(220 38 38)" stopOpacity="0.1" />
          </motion.linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#redGradient)" />
      </motion.svg>

      {/* Interactive Floating Shapes */}
      <div className="absolute inset-0">
        {/* Large Circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? shapeScale.get() * 1.2 : 1,
            opacity: isHovered ? 0.15 : 0.1,
            x: isHovered ? mousePosition.x * 0.04 : 0,
            y: isHovered ? mousePosition.y * 0.04 : 0
          }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full blur-xl"
        />

        {/* Triangle */}
        <motion.div
          initial={{ rotate: 0, opacity: 0 }}
          animate={{
            rotate: isHovered ? 360 + (mousePosition.x * 0.2) : 360,
            opacity: isHovered ? 0.12 : 0.08,
            x: isHovered ? mousePosition.x * 0.03 : 0,
            y: isHovered ? mousePosition.y * 0.03 : 0
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20"
        >
          <motion.svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            className="text-red-400"
            animate={{
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <polygon
              points="30,5 55,55 5,55"
              fill="currentColor"
              opacity="0.6"
            />
          </motion.svg>
        </motion.div>

        {/* Diamond */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? shapeScale.get() : 1,
            opacity: isHovered ? 0.2 : 0.15,
            rotate: isHovered ? mousePosition.x * 0.1 : 0,
            x: isHovered ? mousePosition.x * 0.02 : 0,
            y: isHovered ? mousePosition.y * 0.02 : 0
          }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-40 left-20"
        >
          <motion.svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            className="text-red-500"
            animate={{
              rotate: isHovered ? mousePosition.y * 0.03 : 0
            }}
            transition={{ duration: 0.5 }}
          >
            <polygon
              points="20,2 38,20 20,38 2,20"
              fill="currentColor"
              opacity="0.4"
            />
          </motion.svg>
        </motion.div>

        {/* Hexagon */}
        <motion.div
          initial={{ rotate: 0, opacity: 0 }}
          animate={{
            rotate: isHovered ? 180 + (mousePosition.x * 0.15) : 180,
            opacity: isHovered ? 0.15 : 0.1,
            scale: isHovered ? 1.1 : 1,
            x: isHovered ? mousePosition.x * 0.02 : 0,
            y: isHovered ? mousePosition.y * 0.02 : 0
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-10"
        >
          <motion.svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            className="text-red-300"
            animate={{
              x: isHovered ? mousePosition.x * 0.005 : 0,
              y: isHovered ? mousePosition.y * 0.005 : 0
            }}
            transition={{ duration: 0.8 }}
          >
            <polygon
              points="25,5 45,15 45,35 25,45 5,35 5,15"
              fill="currentColor"
              opacity="0.3"
            />
          </motion.svg>
        </motion.div>

        {/* Plus Signs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 0.08 : 0.05,
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? mousePosition.x * 0.15 : 0,
            x: isHovered ? mousePosition.x * 0.01 : 0,
            y: isHovered ? mousePosition.y * 0.01 : 0
          }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-20 right-40"
        >
          <motion.svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            className="text-red-600"
            animate={{
              rotate: isHovered ? mousePosition.x * 0.1 : 0
            }}
            transition={{ duration: 0.5 }}
          >
            <path d="M15 5 L15 25 M5 15 L25 15" stroke="currentColor" strokeWidth="2" />
          </motion.svg>
        </motion.div>

        {/* Small Circles */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? shapeScale.get() : 1,
            opacity: isHovered ? 0.12 : 0.08,
            x: isHovered ? mousePosition.x * 0.03 : 0,
            y: isHovered ? mousePosition.y * 0.03 : 0
          }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute top-60 left-1/3 w-16 h-16 bg-red-400 rounded-full blur-lg"
        />

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? shapeScale.get() * 1.1 : 1,
            opacity: isHovered ? 0.1 : 0.06,
            x: isHovered ? -mousePosition.x * 0.03 : 0,
            y: isHovered ? -mousePosition.y * 0.03 : 0
          }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-60 right-1/3 w-20 h-20 bg-red-300 rounded-full blur-lg"
        />

        {/* Additional Floating Elements */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? shapeScale.get() * 0.8 : 1,
            opacity: isHovered ? 0.12 : 0.06,
            x: isHovered ? mousePosition.x * 0.025 : 0,
            y: isHovered ? mousePosition.y * 0.025 : 0
          }}
          transition={{ duration: 2, delay: 3 }}
          className="absolute top-80 right-1/4 w-12 h-12 bg-red-600 rounded-full blur-md"
        />

        <motion.div
          initial={{ rotate: 0, opacity: 0 }}
          animate={{
            rotate: isHovered ? 360 + (mousePosition.y * 0.08) : 360,
            opacity: isHovered ? 0.1 : 0.05,
            x: isHovered ? mousePosition.x * 0.015 : 0,
            y: isHovered ? mousePosition.y * 0.015 : 0
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-80 left-1/4"
        >
          <motion.svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            className="text-red-500"
          >
            <rect x="20" y="5" width="5" height="35" fill="currentColor" opacity="0.4" />
            <rect x="5" y="20" width="35" height="5" fill="currentColor" opacity="0.4" />
          </motion.svg>
        </motion.div>

        {/* Pulsing Dots Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? [0.06, 0.12, 0.06] : [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 right-1/3"
        >
          <motion.div
            className="w-2 h-2 bg-red-500 rounded-full"
            animate={{
              scale: isHovered ? [1, 1.5, 1] : [1, 1.2, 1],
              x: isHovered ? mousePosition.x * 0.005 : 0,
              y: isHovered ? mousePosition.y * 0.005 : 0
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? [0.04, 0.1, 0.04] : [0.02, 0.06, 0.02]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 left-1/2"
        >
          <motion.div
            className="w-3 h-3 bg-red-400 rounded-full"
            animate={{
              scale: isHovered ? [1, 2, 1] : [1, 1.5, 1],
              x: isHovered ? -mousePosition.x * 0.003 : 0,
              y: isHovered ? -mousePosition.y * 0.003 : 0
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>

        {/* Interactive Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-red-50/20 via-transparent to-red-100/10"
          animate={{
            background: isHovered
              ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.1) 0%, transparent 50%)`
              : "linear-gradient(to bottom right, rgba(239, 68, 68, 0.05), transparent, rgba(239, 68, 68, 0.02))"
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Interactive Radial Gradient */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? shapeScale.get() * 2 : 1,
            opacity: isHovered ? 0.05 : 0.03,
            x: isHovered ? mousePosition.x * 0.15 : 0,
            y: isHovered ? mousePosition.y * 0.15 : 0
          }}
          transition={{ duration: 3, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500 rounded-full blur-3xl"
        />
      </div>

      {/* Interactive Animated Grid Lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 0.08 : 0.05,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute inset-0"
      >
        <motion.svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          animate={{
            x: isHovered ? mousePosition.x * 0.005 : 0,
            y: isHovered ? mousePosition.y * 0.005 : 0
          }}
          transition={{ duration: 0.8 }}
        >
          <defs>
            <motion.linearGradient
              id="verticalLine"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
              animate={{
                x1: isHovered ? `${mousePosition.x * 0.02}%` : "0%",
                y1: isHovered ? `${mousePosition.y * 0.02}%` : "0%"
              }}
            >
              <stop offset="0%" stopColor="rgb(239 68 68)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(239 68 68)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(239 68 68)" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
          <motion.line
            x1="200"
            y1="0"
            x2="200"
            y2="1000"
            stroke="url(#verticalLine)"
            strokeWidth="1"
            animate={{
              x1: isHovered ? 200 + mousePosition.x * 0.02 : 200,
              x2: isHovered ? 200 + mousePosition.x * 0.02 : 200
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.line
            x1="400"
            y1="0"
            x2="400"
            y2="1000"
            stroke="url(#verticalLine)"
            strokeWidth="1"
            animate={{
              x1: isHovered ? 400 + mousePosition.x * 0.015 : 400,
              x2: isHovered ? 400 + mousePosition.x * 0.015 : 400
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.line
            x1="600"
            y1="0"
            x2="600"
            y2="1000"
            stroke="url(#verticalLine)"
            strokeWidth="1"
            animate={{
              x1: isHovered ? 600 - mousePosition.x * 0.015 : 600,
              x2: isHovered ? 600 - mousePosition.x * 0.015 : 600
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.line
            x1="800"
            y1="0"
            x2="800"
            y2="1000"
            stroke="url(#verticalLine)"
            strokeWidth="1"
            animate={{
              x1: isHovered ? 800 - mousePosition.x * 0.02 : 800,
              x2: isHovered ? 800 - mousePosition.x * 0.02 : 800
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
