function validateGenerate(idea, setErr) {
  const { title, tone, length } = idea;

  return () => {
    const err = {};
    if (!title) {
      err.title = "Please enter a content idea";
    }
    if (!tone) {
      err.tone = "Please select a Tone ";
    }
    setErr(err);
    return err.title || err.tone ? true : false;
  };
}

export default validateGenerate;
