import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        // Loads the slim version of tsparticles which contains just the necessary features
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // Optional: you can hook into this when particles are loaded
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 60, // Limit to 60fps for performance
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab", // creates lines to nearby particles on hover
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 0.5
                            }
                        }
                    },
                },
                particles: {
                    color: {
                        value: ["#0f766e", "#14b8a6", "#f59e0b"], // Teal and Orange colors matching the theme
                    },
                    links: {
                        color: "#0f766e",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce", // particles bounce off the edge of the screen
                        },
                        random: true,
                        speed: 0.8, // Slow, peaceful particle movement
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 40, // Keeping particle count low to ensure ZERO lag
                    },
                    opacity: {
                        value: 0.4,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true, // Optimizes for high DPI screens
            }}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0
            }}
        />
    );
};

export default ParticlesBackground;
