import { GitHubIcon, AniListIcon, TwitterIcon } from "./icons/"

const SocialBar = () => {
    return (
        <div className="flex space-x-4 mx-auto">
            <a className="flex items-center space-x-1">
                <AniListIcon/>
                <span className="text-gray-600 text-sm">
                    AniList
                </span>
            </a>
            <a className="flex items-center space-x-1">
                <GitHubIcon/>
                <span className="text-gray-600 text-sm">
                    Github
                </span>
            </a>
            <a className="flex items-center space-x-1">
                <TwitterIcon/>
                <span className="text-gray-600 text-sm">
                    Twitter
                </span>
            </a>
        </div>
    );
};

export default SocialBar;