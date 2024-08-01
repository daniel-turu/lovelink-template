import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine, Container } from 'tsparticles-engine';
import { useColors } from '../../Components/ColorRoute';

const MyParticles: React.FC = () => {
    const { bgColor } = useColors();

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        // console.log(container);
    }, []);

    return (
        <div className='w-full h-full absolute'>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },
                particles: {
                    number: {
                        value: 50,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    color: {
                        value: bgColor,
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color:  bgColor,
                        },
                        polygon: {
                            nb_sides: 5,
                        },
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: 5,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false,
                        },
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color:  bgColor,
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 2, // Reduced speed
                        direction: 'none',
                        random: false,
                        straight: false,
                        outModes: {
                            default: 'out',
                        },
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        onclick: {
                            enable: true,
                            mode: 'push',
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            links: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        push: {
                            particles_nb: 4,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
                retina_detect: true,
            }}
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
            }}
        />
        </div>
    );
};

export default MyParticles;
