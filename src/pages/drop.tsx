import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Share2 } from 'lucide-react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const springConfig = {
    type: "spring",
    stiffness: 400,
    damping: 25,
    mass: 1
  };

  return (
    <div className="w-full max-w-[500px]">
      <motion.div
        layout
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={springConfig}
        className="w-full p-3 bg-[var(--color-background-alt)] rounded-2xl border-2 inline-flex flex-col gap-1 overflow-hidden shadow-lg"
        style={{
          borderColor: 'var(--color-primary)',
        }}
      >
        {/* Header Section */}
        <motion.div layout transition={springConfig} className="flex justify-start items-start gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={springConfig}
            className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex-shrink-0"
          />
          <div className="flex-1 inline-flex flex-col gap-1">
            <motion.h2 layout="position" transition={springConfig} className="font-bold">
              Cool guy
            </motion.h2>
            <motion.p layout="position" transition={springConfig} className="text-sm opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              urna orci, blandit eu ante nec, sodales vehicula nisi.
            </motion.p>
          </div>
        </motion.div>

        {/* Animated Content */}
        <AnimatePresence mode="popLayout">
          {isOpen && (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: 1,
                y: 0,
                transition: {
                  opacity: { duration: 0.2 },
                  y: springConfig
                }
              }}
              exit={{ 
                opacity: 0,
                y: -20,
                transition: {
                  opacity: { duration: 0.2 },
                  y: springConfig
                }
              }}
              className="flex flex-col gap-2"
            >
              {[1, 2, 3].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      ...springConfig,
                      delay: index * 0.1
                    }
                  }}
                  exit={{
                    opacity: 0,
                    x: -20,
                    transition: {
                      ...springConfig,
                      delay: index * 0.05
                    }
                  }}
                  className="self-stretch inline-flex gap-2 pt-2"
                >
                  <div className="w-10 h-10 bg-[var(--color-secondary)] rounded-lg flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold">Person {item}</h3>
                    <p className="text-sm opacity-80">Lorem ipsum content</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.div layout transition={springConfig} className="self-stretch inline-flex justify-between items-center pt-2">
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={springConfig}
              className="w-8 h-8 bg-[var(--color-background)] rounded-lg flex items-center justify-center"
            >
              <Heart className="w-4 h-4 text-[var(--color-primary)]" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={springConfig}
              className="w-8 h-8 bg-[var(--color-background)] rounded-lg flex items-center justify-center"
            >
              <Share2 className="w-4 h-4 text-[var(--color-primary)]" />
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={springConfig}
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--color-primary)] font-bold underline cursor-pointer px-2 py-1 rounded"
            aria-expanded={isOpen}
          >
            {isOpen ? 'Close' : 'Open'}
          </motion.button>

          <div className="flex gap-2 invisible">
            <div className="w-8 h-8" />
            <div className="w-8 h-8" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Dropdown;