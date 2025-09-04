import React from 'react';
// Affinity
import affinityIcon from '/assets/logos/Affinity/affinity.svg';
import affinityDesigner from '/assets/logos/Affinity/affinitydesigner.svg';
import affinityPhoto from '/assets/logos/Affinity/affinityphoto.svg';
import affinityPublisher from '/assets/logos/Affinity/affinitypublisher.svg';

import deviantartIcon from '/assets/logos/Deviantart/deviantart.svg';
import discordIcon from '/assets/logos/Discord/discord.svg';

// Facebook
import facebookIcon from '/assets/logos/Facebook/facebook.svg';
import facebookGaming from '/assets/logos/Facebook/facebookgaming.svg';
import facebookLive from '/assets/logos/Facebook/facebooklive.svg';

// Github
import githubIcon from '/assets/logos/Github/github.svg';
import githubPages from '/assets/logos/Github/githubpages.svg';

// Google
import googleIcon from '/assets/logos/Google/google.svg';
import googlePay from '/assets/logos/Google/googlepay.svg';
import gmail from '/assets/logos/Google/gmail.svg';

import instagramIcon from '/assets/logos/Instagram/instagram.svg';
import linkedinIcon from '/assets/logos/Linkedin/linkedin.svg';
import pinterestIcon from '/assets/logos/Pinterest/pinterest.svg';
import redditIcon from '/assets/logos/Reddit/reddit.svg';
import telegramIcon from '/assets/logos/Telegram/telegram.svg';
import tiktokIcon from '/assets/logos/TikTok/tiktok.svg';
import twitchIcon from '/assets/logos/Twitch/twitch.svg';

import twitterX from '/assets/logos/Twitter/x.svg';
import twitterBird from '/assets/logos/Twitter/twitterbird.svg';

import whatsappIcon from '/assets/logos/WhatsApp/whatsapp.svg';

// YouTube
import youtubeIcon from '/assets/logos/YouTube/youtube.svg';
import youtubeMusic from '/assets/logos/YouTube/youtubemusic.svg';
import youtubeKids from '/assets/logos/YouTube/youtubekids.svg';
import youtubeGaming from '/assets/logos/YouTube/youtubegaming.svg';
import youtubeShorts from '/assets/logos/YouTube/youtubeshorts.svg';
import youtubeTV from '/assets/logos/YouTube/youtubetv.svg';
import youtubeStudio from '/assets/logos/YouTube/youtubestudio.svg';

const Affinity = {
    Default: ({ size = "w-6 h-6", className = "" }) => (
        <img
            src={affinityIcon}
            alt="Affinity"
            className={`${size} ${className}`}
        />
    ),

    Designer: ({ size = "w-6 h-6", className = "" }) => (
        <img
            src={affinityDesigner}
            alt="Affinity Designer"
            className={`${size} ${className}`}
        />
    ),

    Photo: ({ size = "w-6 h-6", className = "" }) => (
        <img
            src={affinityPhoto}
            alt="Affinity Photo"
            className={`${size} ${className}`}
        />
    ),

    Publisher: ({ size = "w-6 h-6", className = "" }) => (
        <img
            src={affinityPublisher}
            alt="Affinity Publisher"
            className={`${size} ${className}`}
        />
    ),
};

const Google = {
    Default: ({ size = "w-6 h-6", className = "" }) => (
        <img src={googleIcon} alt="Google" className={`${size} ${className}`} />
    ),
    Gmail: ({ size = "w-6 h-6", className = "" }) => (
        <img src={gmail} alt="Gmail" className={`${size} ${className}`} />
    ),
    Pay: ({ size = "w-6 h-6", className = "" }) => (
        <img src={googlePay} alt="Google Pay" className={`${size} ${className}`} />
    )
};

const Instagram = {
    Default: ({ size = "w-6 h-6", className = "" }) => (
        <img src={instagramIcon} alt="Instagram" className={`${size} ${className}`} />
    )
};

const Linkedin = {
    Default: ({ size = "w-6 h-6", className = "" }) => (
        <img src={linkedinIcon} alt="LinkedIn" className={`${size} ${className}`} />
    )
};

const Pinterest = {
    Default: ({ size = "w-6 h-6", className = "" }) => (
        <img src={pinterestIcon} alt="Pinterest" className={`${size} ${className}`} />
    )
};

const Reddit = {
    Default: ({ size = "w-6 h-6", className = "" }) => (
        <img src={redditIcon} alt="Reddit" className={`${size} ${className}`} />
    )
};

const Telegram = {
    Default: ({ size = "w-6 h-6", className = "" }) => (
        <img src={telegramIcon} alt="Telegram" className={`${size} ${className}`} />
    )
};

const TikTok = {
    Default: ({ size = "w-6 h-6", className = "" }) => (
        <img src={tiktokIcon} alt="TikTok" className={`${size} ${className}`} />
    )
};

const Twitch = {
    Default: ({ size = "w-6 h-6", className = "" }) => (
        <img src={twitchIcon} alt="Twitch" className={`${size} ${className}`} />
    )
};

const Twitter = {
    X: ({ size = "w-6 h-6", className = "" }) => (
        <img src={twitterX} alt="Twitter X" className={`${size} ${className}`} />
    ),
    TwitterBird: ({ size = "w-6 h-6", className = "" }) => (
        <img src={twitterBird} alt="Twitter Bird" className={`${size} ${className}`} />
    )
};

const WhatsApp = {
    Default: ({ size = "w-6 h-6", className = "" }) => (
        <img src={whatsappIcon} alt="WhatsApp" className={`${size} ${className}`} />
    )
};

// Actualizar YouTube con los componentes faltantes
const YouTube = {
    Default: ({ size = "w-6 h-6", className = "" }) => (
        <img src={youtubeIcon} alt="YouTube" className={`${size} ${className}`} />
    ),
    Music: ({ size = "w-6 h-6", className = "" }) => (
        <img src={youtubeMusic} alt="YouTube Music" className={`${size} ${className}`} />
    ),
    Kids: ({ size = "w-6 h-6", className = "" }) => (
        <img src={youtubeKids} alt="YouTube Kids" className={`${size} ${className}`} />
    ),
    Gaming: ({ size = "w-6 h-6", className = "" }) => (
        <img src={youtubeGaming} alt="YouTube Gaming" className={`${size} ${className}`} />
    ),
    Shorts: ({ size = "w-6 h-6", className = "" }) => (
        <img src={youtubeShorts} alt="YouTube Shorts" className={`${size} ${className}`} />
    ),
    TV: ({ size = "w-6 h-6", className = "" }) => (
        <img src={youtubeTV} alt="YouTube TV" className={`${size} ${className}`} />
    ),
    Studio: ({ size = "w-6 h-6", className = "" }) => (
        <img src={youtubeStudio} alt="YouTube Studio" className={`${size} ${className}`} />
    )
};

const Deviantart = {
    Default: ({ size = "w-6 h-6", className = "" }) => (
        <img 
            src={deviantartIcon}
            alt="Deviantart"
            className={`${size} ${className}`}
        />
    )
};

const Discord = {
    Default: ({ size = "w-6 h-6", className = "" }) => (
        <img 
            src={discordIcon}
            alt="Discord"
            className={`${size} ${className}`}
        />
    )
};

const Facebook = {
    Default: ({ size = "w-6 h-6", className = "" }) => (
        <img 
            src={facebookIcon}
            alt="Facebook"
            className={`${size} ${className}`}
        />
    ),
    Gaming: ({ size = "w-6 h-6", className = "" }) => (
        <img 
            src={facebookGaming}
            alt="Facebook Gaming"
            className={`${size} ${className}`}
        />
    ),
    Live: ({ size = "w-6 h-6", className = "" }) => (
        <img 
            src={facebookLive}
            alt="Facebook Live"
            className={`${size} ${className}`}
        />
    )
};

const Github = {
    Default: ({ size = "w-6 h-6", className = "" }) => (
        <img 
            src={githubIcon}
            alt="Github"
            className={`${size} ${className}`}
        />
    ),
    Pages: ({ size = "w-6 h-6", className = "" }) => (
        <img 
            src={githubPages}
            alt="Github Pages"
            className={`${size} ${className}`}
        />
    )
};

export {
    Affinity,
    Deviantart,
    Discord,
    Facebook,
    Github,
    Google,
    Instagram,
    Linkedin,
    Pinterest,
    Reddit,
    Telegram,
    TikTok,
    Twitch,
    Twitter,
    WhatsApp,
    YouTube
};