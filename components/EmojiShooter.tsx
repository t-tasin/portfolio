'use client';

import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { Sparkles, X } from 'lucide-react';

const emojis = ['🚀', '⚡', '💻', '🎯', '🔥', '✨', '🎨', '🎮', '🏆', '💡', '🌟', '🎪', '🎭', '🎬', '🎸'];

export default function EmojiShooter() {
  const [isOpen, setIsOpen] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);

  useEffect(() => {
    if (!isOpen || !sceneRef.current) return;

    // Create engine
    const engine = Matter.Engine.create();
    engineRef.current = engine;

    const { Engine, Render, World, Bodies, Body, Events, Runner } = Matter;

    // Create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent',
      },
    });
    renderRef.current = render;

    // Create boundaries
    const wallThickness = 50;
    const walls = [
      // Bottom
      Bodies.rectangle(
        window.innerWidth / 2,
        window.innerHeight + wallThickness / 2,
        window.innerWidth,
        wallThickness,
        { isStatic: true, render: { fillStyle: 'transparent' } }
      ),
      // Left
      Bodies.rectangle(
        -wallThickness / 2,
        window.innerHeight / 2,
        wallThickness,
        window.innerHeight,
        { isStatic: true, render: { fillStyle: 'transparent' } }
      ),
      // Right
      Bodies.rectangle(
        window.innerWidth + wallThickness / 2,
        window.innerHeight / 2,
        wallThickness,
        window.innerHeight,
        { isStatic: true, render: { fillStyle: 'transparent' } }
      ),
    ];

    World.add(engine.world, walls);

    // Click to spawn emojis
    const handleClick = (event: MouseEvent) => {
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      const size = 40 + Math.random() * 30;

      const body = Bodies.circle(event.clientX, event.clientY, size / 2, {
        restitution: 0.6,
        friction: 0.1,
        density: 0.001,
        render: {
          fillStyle: 'transparent',
          sprite: {
            texture: `data:image/svg+xml,${encodeURIComponent(
              `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
                <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="${size}">${emoji}</text>
              </svg>`
            )}`,
            xScale: 1,
            yScale: 1,
          },
        },
      });

      // Add some initial velocity
      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 10,
        y: -5 - Math.random() * 5,
      });

      // Add angular velocity
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.2);

      World.add(engine.world, body);

      // Remove after 10 seconds
      setTimeout(() => {
        World.remove(engine.world, body);
      }, 10000);
    };

    sceneRef.current.addEventListener('click', handleClick);

    // Keyboard shortcut for rapid fire
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            const mouseEvent = new MouseEvent('click', {
              clientX: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
              clientY: window.innerHeight / 2,
            });
            sceneRef.current?.dispatchEvent(mouseEvent);
          }, i * 100);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Run the engine
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Cleanup
    return () => {
      sceneRef.current?.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleKeyPress);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
      }
      if (render.textures) {
        Object.keys(render.textures).forEach((key) => {
          delete render.textures[key];
        });
      }
    };
  }, [isOpen]);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full shadow-lg shadow-primary-500/50 transition-all duration-300 transform hover:scale-110 group"
        aria-label="Toggle Emoji Shooter"
      >
        <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
      </button>

      {/* Emoji Shooter Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 z-50 p-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg transition-all duration-300"
            aria-label="Close Emoji Shooter"
          >
            <X size={24} />
          </button>

          {/* Instructions */}
          <div className="absolute top-8 left-8 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 max-w-sm">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-400" />
              Emoji Physics Shooter
            </h3>
            <p className="text-sm text-gray-300 mb-2">Click anywhere to shoot emojis!</p>
            <p className="text-xs text-gray-400">
              Press <kbd className="px-2 py-1 bg-white/20 rounded text-white">Space</kbd> for rapid fire
            </p>
          </div>

          {/* Physics Scene */}
          <div ref={sceneRef} className="absolute inset-0" />
        </div>
      )}
    </>
  );
}
