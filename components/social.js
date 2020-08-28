import { GitHubIcon, AniListIcon, TwitterIcon } from './icons/';

const SocialBar = () => {
  return (
    <div className="flex flex-row py-2 items-center justify-evenly h-full">
      <a
        href="https://anilist.co/user/Miuri/"
        className="flex flex-col flex-wrap justify-center items-center border border-lighter-gray dark:border-off-black dark:hover:border-gray-700 hover:border-gray-300 hover:shadow transition-all duration-200 ease-out rounded p-4 px-6 md:px-4 space-y-1"
      >
        <AniListIcon size={24} />
        <span className="text-light-gray font-medium dark:text-gray-300 text-sm md:sr-only">
          AniList <span className="sr-only">Icon</span>
        </span>
      </a>
      <a
        href="https://github.com/itshoro"
        className="flex flex-col flex-wrap justify-center items-center border border-lighter-gray dark:border-off-black dark:hover:border-gray-700 hover:border-gray-300 hover:shadow transition-all duration-200 ease-out rounded p-4 px-6 md:px-4 space-y-1"
      >
        <GitHubIcon
          size={24}
          className="text-off-black dark:text-white fill-current"
        />
        <span className="text-light-gray font-medium dark:text-gray-300 text-sm md:sr-only">
          Github <span className="sr-only">Icon</span>
        </span>
      </a>
      <a
        href="https://twitter.com/horo_dev"
        className="flex flex-col flex-wrap justify-center items-center border border-lighter-gray dark:border-off-black dark:hover:border-gray-700 hover:border-gray-300 hover:shadow transition-all duration-200 ease-out rounded p-4 px-6 md:px-4 space-y-1"
      >
        <TwitterIcon size={24} />
        <span className="text-light-gray font-medium dark:text-gray-300 text-sm md:sr-only">
          Twitter <span className="sr-only">Icon</span>
        </span>
      </a>
    </div>
  );
};

export default SocialBar;
