// 6. Music Player

// Audio Controls: Users can play, pause, skip to the next/previous track, and control the volume.

// Playlist: Create a playlist from available audio files where users can see and select songs.

// Progress Bar: Display a progress bar for the current track that users can click to jump to a specific point in the song.

// Shuffle and Repeat: Add buttons to shuffle songs randomly or repeat the current track.

// Track Information: Display track metadata (e.g., title, artist, album art) dynamically when a song is playing.

// Do it in REACT JS

import { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import athididevobhava from "./assets/athididevobhava.jpeg";
import Baguntundi from "./assets/Baguntundi.mp3";
import samajavaragamana from "./assets/Samajavaragamana - SenSongsMp3.Co.mp3";
import alavaikuntapuramlo from "./assets/alavaikuntapuramlo.jpg";
import Inkem_Inkem_Kaavaale from "./assets/Inkem Inkem Kaavaale.mp3";
import geethagovindam from "./assets/geethagovindam.jpeg";
import ardasatabdam from "./assets/ardasatabdam.jpeg";
import YeKannulu from "./assets/Ye Kannulu Choodani - SenSongsMp3.Com.mp3";
import premakavali from "./assets/premakavali.webp";
import NuvveNuvve from "./assets/Nuvve Nuvve - SenSongsmp3.Co.mp3";
import nuvvenuvve from "./assets/nuvvenuvve.jpeg";
import naamanauku from "./assets/Nuvve Nuvve - SenSongsmp3.Co.mp3";
import maryadaramanna from "./assets/maryadaramanna.jpeg";
import Telugammayi from "./assets/Telugammayi - SenSongsmp3.Co.mp3";
import yourockmyworld from "./assets/[iSongs.info] 01 - You Rock My World.mp3";
import arya from "./assets/arya.jpeg";
import radharamanam from "./assets/Radha Ramanam _ Tipparaa Meesam _ Anurag Kulkarni _ Nutana Mohan _ Sing Telugu.mp3";
import thippara from "./assets/thippara.webp";
import seethakalam from "./assets/Seethakaalam - SenSongsMp3.Co.mp3";
import sofsathyamurthy from "./assets/sofsathyamurthy.jpeg";
import headphones from "./assets/headphones.png";

import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Heart,
  Shuffle,
  Repeat,
} from "lucide-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [like, setLike] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(true);
  const audioRef = useRef(null);

  const songsPlayList = [
    {
      id: 1,
      title: "Samajavaragamana",
      moviename: "Ala Vaikuntapuramuloo",
      url: samajavaragamana,
      imageurl: alavaikuntapuramlo,
    },
    {
      id: 2,
      title: "Inkem Inkem Inkem Kaavaale",
      moviename: "Geetha Govindam",
      url: Inkem_Inkem_Kaavaale,
      imageurl: geethagovindam,
    },
    {
      id: 3,
      title: "Ye kannulu choodani",
      moviename: "Ardha Sathabdam",
      url: YeKannulu,
      imageurl: ardasatabdam,
    },
    {
      id: 4,
      title: "Nuvve Nuvve",
      moviename: "Prema Kavali",
      url: NuvveNuvve,
      imageurl: premakavali,
    },
    {
      id: 5,
      title: "Naa Manasuku",
      moviename: "Nuvve Nuvve",
      url: naamanauku,
      imageurl: nuvvenuvve,
    },
    {
      id: 6,
      title: "Telugammayi",
      moviename: "Maryadaramanna",
      url: Telugammayi,
      imageurl: maryadaramanna,
    },
    {
      id: 7,
      title: "Radha Ramanam",
      moviename: "Thippara meesam",
      url: radharamanam,
      imageurl: thippara,
    },
    {
      id: 8,
      title: "You rock my world",
      moviename: "Arya",
      url: yourockmyworld,
      imageurl: arya,
    },
    {
      id: 9,
      title: "Baguntundi",
      moviename: "Athidi devo bhava",
      url: Baguntundi,
      imageurl: athididevobhava,
    },
    {
      id: 10,
      title: "Seethakalam",
      moviename: "S/O Satyamurthy",
      url: seethakalam,
      imageurl: sofsathyamurthy,
    },
  ];

  const [song, setSong] = useState(songsPlayList[0]);
  const nextSong = () => {
    if (shuffle && song.id < songsPlayList.length) {
      setSong(songsPlayList[Math.floor(Math.random() * songsPlayList.length)]);
    } else if (!shuffle && song.id < songsPlayList.length && repeat) {
      setSong(songsPlayList[song.id]);
    } else if (song.id == songsPlayList.length && !shuffle && repeat) {
      setSong(songsPlayList[0]);
    }
  };

  const prevSong = () => {
    if (shuffle && song.id > 1) {
      setSong(songsPlayList[Math.floor(Math.random() * songsPlayList.length)]);
    } else if (!shuffle && song.id > 1 && repeat) {
      setSong(songsPlayList[song.id - 2]);
    } else if (song.id == 1 && !shuffle && repeat) {
      setSong(songsPlayList[songsPlayList.length - 1]);
    }
  };

  const play = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const heart = () => {
    setLike(!like);
  };


  

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl font-bold text-white text-center bg-orange-400 p-4">
        <img src={headphones} alt="headphones" className="size-20 inline" />
        Music Player
      </h1>

      <ResizablePanelGroup
        direction="horizontal"
        className="flex flex-row gap-4"
      >
        <ResizablePanel defaultSize={78}>
          <div className="flex items-center justify-center p-4">
            <span className="font-semibold">
              <Card className="flex flex-col gap-2 place-items-center">
                <CardHeader>
                  <CardTitle>{song.title}</CardTitle>
                  <CardDescription>{song.moviename}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <img
                    className="rounded-lg size-80"
                    src={song.imageurl}
                    alt={song.title}
                  />
                  <audio
                    autoPlay
                    onEnded={nextSong}
                    ref={audioRef}
                    controls
                    src={song.url}
                  ></audio>
                </CardContent>
                <CardFooter className="flex flex-row gap-4 justify-between">
                  {/* shuffle or repeat */}
                  {shuffle ? (
                    <Shuffle
                      onClick={() => {
                        setShuffle(false);
                        setRepeat(true);
                      }}
                    />
                  ) : (
                    <Repeat
                      onClick={() => {
                        setShuffle(true);
                        setRepeat(false);
                      }}
                    />
                  )}
                  <button className="border-2 p-2 rounded-3xl">
                    <ChevronLeft onClick={prevSong} />
                  </button>
                  <button className="p-2 rounded-3xl">
                    {isPlaying ? (
                      <Pause onClick={play} />
                    ) : (
                      <Play onClick={play} />
                    )}
                  </button>
                  <button className="border-2 p-2 rounded-3xl">
                    <ChevronRight onClick={nextSong} />
                  </button>
                  {like ? (
                    <Heart onClick={heart} className="fill-red-500" />
                  ) : (
                    <Heart onClick={heart} className="fill-none" />
                  )}
                </CardFooter>
              </Card>
            </span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className="bg-black w-0.5" />
        <ResizablePanel defaultSize={22} className="bg-gray-400">
          <div className="flex m-2 gap-2 flex-wrap">
            {songsPlayList.map((song) => (
              <article
                onClick={() => setSong(song)}
                key={song.id}
                className="flex flex-col gap-2 p-4 cursor-pointer place-items-center border-2 size-36 rounded-lg bg-white hover:bg-slate-500"
              >
                <img
                  className="size-14 rounded-full"
                  src={song.imageurl}
                  alt={song.title}
                />
                <article
                  className="flex flex-col gap-1 items-center"
                  onClick={() => setSong(song)}
                >
                  <h2 className="font-bold">
                    {song.title.length > 10
                      ? song.title.slice(0, 10)
                      : song.title}
                  </h2>
                  <h4 className="text-sm">
                    {song.moviename.length > 12
                      ? song.moviename.slice(0, 12)
                      : song.moviename}
                  </h4>
                </article>
              </article>
            ))}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
