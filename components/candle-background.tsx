'use client';

export function CandleBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="flicker">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" seed="1" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <style>
            {`
              @keyframes flicker {
                0%, 100% { opacity: 1; }
                25% { opacity: 0.85; }
                50% { opacity: 0.95; }
                75% { opacity: 0.8; }
              }
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
              }
              .candle-flame {
                animation: flicker 3s ease-in-out infinite, float 4s ease-in-out infinite;
                filter: url(#flicker);
              }
            `}
          </style>
        </defs>

        {/* Dark background */}
        <rect width="1200" height="800" fill="#0a0a0a" />

        {/* Scattered candles */}
        {[
          { x: 100, y: 150, delay: 0 },
          { x: 250, y: 250, delay: 0.5 },
          { x: 400, y: 100, delay: 1 },
          { x: 600, y: 300, delay: 0.3 },
          { x: 800, y: 150, delay: 0.8 },
          { x: 1000, y: 250, delay: 0.2 },
          { x: 150, y: 500, delay: 0.6 },
          { x: 500, y: 550, delay: 0.4 },
          { x: 900, y: 600, delay: 0.9 },
          { x: 300, y: 700, delay: 0.1 },
          { x: 1050, y: 700, delay: 0.7 },
        ].map((candle, idx) => (
          <g key={idx}>
            {/* Candle body */}
            <rect x={candle.x - 6} y={candle.y} width="12" height="40" fill="#e8d4b0" rx="3" />
            
            {/* Wax drips */}
            <ellipse cx={candle.x - 8} cy={candle.y + 35} rx="4" ry="6" fill="#d4b896" />
            <ellipse cx={candle.x + 8} cy={candle.y + 38} rx="3" ry="5" fill="#d4b896" />

            {/* Flame outer glow */}
            <ellipse
              cx={candle.x}
              cy={candle.y - 8}
              rx="16"
              ry="24"
              fill="rgba(255, 180, 50, 0.3)"
              className="candle-flame"
              style={{ animationDelay: `${candle.delay}s` }}
            />

            {/* Flame middle */}
            <ellipse
              cx={candle.x}
              cy={candle.y - 10}
              rx="10"
              ry="18"
              fill="rgba(255, 200, 80, 0.6)"
              className="candle-flame"
              style={{ animationDelay: `${candle.delay + 0.2}s` }}
            />

            {/* Flame inner bright */}
            <ellipse
              cx={candle.x}
              cy={candle.y - 12}
              rx="5"
              ry="10"
              fill="rgba(255, 240, 150, 1)"
              className="candle-flame"
              style={{ animationDelay: `${candle.delay + 0.1}s` }}
            />

            {/* Flame tip highlight */}
            <ellipse
              cx={candle.x - 1}
              cy={candle.y - 20}
              rx="2"
              ry="4"
              fill="rgba(255, 255, 200, 0.8)"
              className="candle-flame"
              style={{ animationDelay: `${candle.delay + 0.3}s` }}
            />
          </g>
        ))}
      </svg>

      {/* Ambient light gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950/10 via-black/40 to-black/60 pointer-events-none" />
    </div>
  );
}
