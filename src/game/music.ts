let track: HTMLAudioElement | null = null;
let muted = false;

export function startMusic() {
  if (!track) {
    track = new Audio("/music.mp3");
    track.loop = true;
    track.preload = "auto";
    track.volume = 0.72;
  }
  track.muted = muted;
  void track.play().catch(() => undefined);
}

export function setMusicMuted(next: boolean) {
  muted = next;
  if (track) track.muted = next;
}

export function stopMusic() {
  if (!track) return;
  track.pause();
  track.currentTime = 0;
}
