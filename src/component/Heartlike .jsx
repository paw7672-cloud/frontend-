import { useEffect, useState } from "react";

function HeartLike() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const heart = {
        id: Date.now() + Math.random(),

        // Random horizontal position
        left: Math.random() * 100,

        // Random size
        size: 20 + Math.random() * 45,

        // Random animation duration
        duration: 3 + Math.random() * 4,

        // Random delay
        delay: Math.random() * 2,

        // Random opacity
        opacity: 0.4 + Math.random() * 0.6,
      };

      setHearts((previous) => [
        ...previous,
        heart,
      ]);

      // Remove heart after animation
      setTimeout(() => {
        setHearts((previous) =>
          previous.filter((item) => item.id !== heart.id)
        );
      }, 8000);
    };

    // Create hearts continuously
    const interval = setInterval(createHeart, 250);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="heart-screen">

      <div className="heart-content">
        <h1>Heart Animation</h1>

        <p>
          Hearts are created using React and CSS.
        </p>
      </div>

      {/* Hearts */}
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            opacity: heart.opacity,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        />
      ))}

    </div>
  );
}

export default HeartLike;