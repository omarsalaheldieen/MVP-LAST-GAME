import dataIntro from "./animations/data_intro.js";
import dataOutro from "./animations/data_outro.js";
import photoIntro from "./animations/photo_intro.js";
import photoOutro from "./animations/photo_outro.js";
import animationLoop from "./animations/animation_loop.js";
import animationOutro from "./animations/animation_outro.js";
import animationIntro from "./animations/animation_intro.js";
import Lottie from "Lottie-web";
import io from "./vendor/socket.io.min.js";
import "./animations/images/img_0.jpg";
import "./animations/images/img_3.jpg";
import "./animations/images/img_4.png";
import "./animations/images/img_5.png";
import "./animations/images/img_6.png";
import "./animations/images/img_7.jpg";
import "./animations/images/playersImages/unknown.png";
import "./animations/images/roles/ADC.png";
import "./animations/images/teamlogos/img_3.png";
import "./animations/images/roles/img_1.png";
import "./animations/images/roles/JNG.png";
import "./animations/images/roles/MID.png";
import "./animations/images/roles/SUPP.png";
import "./animations/images/roles/TOP.png";

const data_intro = {
  container: document.getElementById("data_intro"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  animationData: dataIntro
};

const data_outro = {
  container: document.getElementById("data_outro"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  animationData: dataOutro
};

const photo_intro = {
  container: document.getElementById("photo_intro"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  animationData: photoIntro
};

const loop = {
  container: document.getElementById("animation_loop"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  animationData: animationLoop
};

const photo_outro = {
  container: document.getElementById("photo_intro"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  animationData: photoOutro
};

const intro = {
  container: document.getElementById("animation_intro"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  animationData: animationIntro
};

const outro = {
  container: document.getElementById("animation_outr"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  animationData: animationOutro
};

let intro_animation;
let outro_animation;
let animation_loop;
let data_intro_animation;
let data_outro_animation;
let photo_intro_animation;
let photo_outro_animation;
const socket = io("http://192.168.1.3:3003/lol-controller");
// Start Animation
socket.on("MVPLastGame", (data) => {
  console.log(data.data);
  // get the playername
  data_intro.animationData.assets[10].layers[4].t.d.k[0].s.t =
    data.data.playerName;
  data_outro.animationData.assets[11].layers[4].t.d.k[0].s.t =
    data.data.playerName;

  // Get the Champion (Character)
  data_intro.animationData.assets[10].layers[3].t.d.k[0].s.t =
    data.data.characterName;
  data_outro.animationData.assets[11].layers[3].t.d.k[0].s.t =
    data.data.characterName;
  // get the Player image
  photo_intro.animationData.assets[0].p = data.data.playerImage;
  photo_outro.animationData.assets[0].p = data.data.playerImage;

  // Get the DMG
  data_intro.animationData.assets[12].layers[3].t.d.k[0].s.t =
    data.data.scores.KDA.Value;
  data_outro.animationData.assets[13].layers[3].t.d.k[0].s.t =
    data.data.scores.KDA.Value;

  // Get the GPM
  data_intro.animationData.assets[12].layers[7].t.d.k[0].s.t =
    data.data.scores.DMG.Value;
  data_outro.animationData.assets[13].layers[7].t.d.k[0].s.t =
    data.data.scores.DMG.Value;

  // Get the kiils
  data_intro.animationData.assets[12].layers[1].t.d.k[0].s.t =
    data.data.scores["CS/M"].Value;
  data_outro.animationData.assets[13].layers[1].t.d.k[0].s.t =
    data.data.scores["CS/M"].Value;

  // Get the KDA
  data_intro.animationData.assets[12].layers[5].t.d.k[0].s.t =
    data.data.scores.gold.Value;
  data_outro.animationData.assets[13].layers[5].t.d.k[0].s.t =
    data.data.scores.gold.Value;

  // Get the DMG
  data_intro.animationData.assets[12].layers[11].t.d.k[0].s.t =
    data.data.scores.soloKills.Value;
  data_outro.animationData.assets[13].layers[11].t.d.k[0].s.t =
    data.data.scores.gold.Value;

  // Get the KP
  data_intro.animationData.assets[12].layers[9].t.d.k[0].s.t =
    data.data.scores.DPM.Value;
  data_outro.animationData.assets[13].layers[9].t.d.k[0].s.t =
    data.data.scores.DPM.Value;

  // Get the Team name
  data_intro.animationData.assets[10].layers[5].t.d.k[0].s.t =
    data.data.teamName;
  data_outro.animationData.assets[11].layers[5].t.d.k[0].s.t =
    data.data.teamName;

  // load animation
  intro_animation = Lottie.loadAnimation(intro);
  setTimeout(() => {
    intro_animation.destroy();
    data_intro_animation = Lottie.loadAnimation(data_intro);
    photo_intro_animation = Lottie.loadAnimation(photo_intro);
  }, 1200);
  setTimeout(() => {
    animation_loop = Lottie.loadAnimation(loop);
  }, 1700);
});
data_intro_animation = Lottie.loadAnimation(data_intro);
photo_intro_animation = Lottie.loadAnimation(photo_intro);
// End animations
socket.on("MVPLastGame:outro", () => {
  data_intro_animation.destroy();
  data_outro_animation = Lottie.loadAnimation(data_outro);
  animation_loop.destroy();
  outro_animation = Lottie.loadAnimation(outro);
  photo_intro_animation.destroy();
  photo_outro_animation = Lottie.loadAnimation(photo_outro);
  setTimeout(() => {
    photo_intro_animation.destroy();
    photo_outro_animation.destroy();
    data_outro_animation.destroy();
    photo_intro_animation.destroy();
  }, 2000);
  setTimeout(() => {
    animation_loop.destroy();
  }, 2500);
});
