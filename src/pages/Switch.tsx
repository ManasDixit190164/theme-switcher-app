import { useTheme } from '../hooks/useTheme';

const Switch = () => {
  const { toggleColorTheme, toggleColorMode, colorMode, colorTheme } = useTheme();

  return (
    <div className="flex flex-col md:flex-row bg-[var(--color-background)] text-[var(--color-text)] transition-colors duration-300 ease-in-out p-6 rounded-xl space-x-6">
      {/* Left grid section */}
      <div className="flex-shrink-0 bg-[var(--color-border)] p-2 rounded-lg">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 w-60 h-40 ">
          <div className="bg-[var(--color-primary)] rounded-l-lg row-span-2 w-full h-full"></div>
          <div className="bg-[var(--color-secondary)] rounded-tr-lg w-full h-full"></div>
          <div className="bg-[var(--color-accent)] rounded-br-lg w-full h-full"></div>
        </div>
      </div>

      {/* Right controls section */}
      <div className="flex-grow flex flex-col justify-center items-center text-center space-y-4">
        <h2 className="text-[var(--color-text)] text-2xl">Sample Testing</h2>
        <button
          className="w-full py-3 bg-[var(--color-primary)] text-[var(--color-primary-contrast)]
                     hover:bg-[var(--color-primary-contrast)] hover:text-[var(--color-primary)]
                     active:bg-[var(--color-accent)] active:text-[var(--color-accent-contrast)]
                     transition-colors duration-200 ease-in-out
                     rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          onClick={toggleColorMode}
        >
          {colorMode.charAt(0).toUpperCase() + colorMode.slice(1)}
        </button>
        <button
          className="w-full py-3 rounded-lg bg-[var(--color-secondary)] text-[var(--color-secondary-contrast)]
                     hover:bg-[var(--color-secondary-contrast)] hover:text-[var(--color-secondary)]
                     active:bg-[var(--color-accent)] active:text-[var(--color-accent-contrast)]
                     transition-colors duration-200 ease-in-out
                     focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          onClick={() => toggleColorTheme()}
        >
          {colorTheme.charAt(0).toUpperCase() + colorTheme.slice(1)}
        </button>
      </div>
    </div>
  );
};

export default Switch;