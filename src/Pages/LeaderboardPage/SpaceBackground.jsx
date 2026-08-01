import Particles from "react-tsparticles";

function SpaceBackground() {
    return (
        <Particles
            options={{
                fullScreen: false,

                particles: {
                    number: {
                        value: 120,
                    },

                    color: {
                        value: "#ff8c00",
                    },

                    links: {
                        enable: true,
                        color: "#ff8c00",
                        distance: 220,
                        opacity: 0.7,
                        width: 1.8,
                    },

                    move: {
                        enable: true,
                        speed: 0.4,
                        random: true,
                    },

                    size: {
                        value: 4,
                    },

                    opacity: {
                        value: 1,
                    },
                },

                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },

                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },

                    modes: {
                        grab: {
                            distance: 250,
                            links: {
                                opacity: 1,
                            },
                        },

                        push: {
                            quantity: 5,
                        },
                    },
                },

                background: {
                    color: "transparent",
                },
            }}
        />
    );
}

export default SpaceBackground;