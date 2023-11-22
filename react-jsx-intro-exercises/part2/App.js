function App() {
  return (
    <div>
      <Tweet
        name="Beefy"
        username="doctormeatdoeshousecalls"
        date={new Date().toDateString()}
        message="This app STIIIINKS"
      />
      <Tweet
        name="Dennis"
        username="Dennis123"
        date={new Date().toDateString()}
        message="sugma tip"
      />
      <Tweet
        name="Jerry"
        username="Jerry69420xXx"
        date={new Date().toDateString()}
        message="Twitter blows!"
      />
    </div>
  );
}
