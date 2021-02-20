import sleep from "./helpers/sleep";

function printWithCompetingDelays(firstMessage: string, secondMessage: string) {
  console.log("START of function body");

  sleep(4000).then(() => console.log(firstMessage));

  console.log("MIDDLE of function body");

  sleep(2000).then(() => console.log(secondMessage));

  console.log("END of function body");
}

printWithCompetingDelays("hello", "world");