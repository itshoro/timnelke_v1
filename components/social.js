import { GitHubIcon, AniListIcon, TwitterIcon } from "./icons/"

const SocialBar = () => {
    return (
        <div className="flex space-x-4 mx-auto">
            <a className="flex flex-wrap justify-center items-center space-x-1">
                <AniListIcon/>
                <span className="text-gray-600 text-sm hidden md:block">
                    AniList
                </span>
            </a>
            <a className="flex flex-wrap justify-center items-center space-x-1">
                <GitHubIcon/>
                <span className="text-gray-600 text-sm hidden md:block">
                    Github
                </span>
            </a>
            <a className="flex flex-wrap justify-center items-center space-x-1">
                <TwitterIcon/>
                <span className="text-gray-600 text-sm hidden md:block">
                    Twitter
                </span>
            </a>
        </div>
    );
};

export default SocialBar;