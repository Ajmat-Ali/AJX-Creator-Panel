function ValidateIdea(idea, setErr) {
  const { title, description } = idea;
  return () => {
    const err = {};

    if (title.length < 3) {
      err.title = "Please type at lease 3 characters";
    }

    if (description.length < 3) {
      err.description = "Please type at lease 10 characters";
    }
    setErr(err);
    return err.title || err.description ? true : false;
  };
}

export default ValidateIdea;
