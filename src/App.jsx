import ToggleTheme from "./components/ToggleTheme";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-4">
      <ToggleTheme />

      <div className="flex items-center justify-center w-full flex-col gap-4">
        <h1 className="text-6xl dark:text-white text-black font-medium transition-all duration-300 ease-in-out">
          Test Theme :)
        </h1>
        <button className="cursor-pointer w-50 bg-black rounded-full text-white text-base font-semibold flex items-center justify-center border border-solid border-amber-500 hover:bg-amber-500 transition-all duration-300 ease-in-out dark:hover:bg-red-500 dark:bg-white dark:border-red-500 dark:text-black h-10 ">
          Test Theme :D
        </button>
      </div>
    </div>
  );
};

export default App;
