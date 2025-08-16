export const ai_chat = async (value) => {
  const res = await fetch("http://192.168.0.170:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama3.1:8b",
      prompt: value,
      stream: false,
    }),
  });
  const data = await res.json();
  return data.response;
};
