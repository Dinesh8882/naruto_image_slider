const tl = gsap.timeline({ repeat: -1 });

tl.to(
    ".imageContainer",
    {
        width: "100%",
        ease: "expo.ease",
        stagger: 2,
    },
    "animation1"
)
    .to(
        ".text h1",
        {
            transform: "translateY(0%)",
            ease: "expo.ease",
            stagger: 2,
        },
        "animation1"
    )
    .to(
        ".text h1",
        {
            delay: 2,
            transform: "translateY(100%)",
            ease: "expo.ease",
            stagger: 2,
        },
        "animation1"
    );



