
c = [0,0,1,0,0,1,0]

const JumpingOnClouds = (clouds) => {
  let now = 0;
  let overal = 0;

  for (let i = 0; i < clouds.length; i++) {
    if (clouds[now + 2] === 0) {
      now += 2;
      overal = overal + 1;
    } else if (clouds[now + 1] === 0) {
      now++;
      overal = overal + 1;
    }
  }
};

JumpingOnClouds()
