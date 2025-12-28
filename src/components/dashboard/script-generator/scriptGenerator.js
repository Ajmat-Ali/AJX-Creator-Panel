function scriptGenerator(idea, firstName) {
  return `Hello Mr./Ms. ${firstName}, we regret to inform you that this feature is currently unavailable. Your script will be generated once it becomes available. Here is your Idea: \nTitle: ${idea.title} \nTone: ${idea.tone}`;
}

export default scriptGenerator;
