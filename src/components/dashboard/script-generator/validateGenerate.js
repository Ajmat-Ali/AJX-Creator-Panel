function validateGenerate(idea, setErr) {
  const { title, tone, script } = idea;

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

export function validateScript(idea, setErr) {
  const { script } = idea;
  return () => {
    const err = {};
    if (!script) {
      err.script = "No script generated! ";
    }
    setErr(err);
    return err.script ? true : false;
  };
}
