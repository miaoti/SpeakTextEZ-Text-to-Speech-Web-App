import textToSpeech from "@google-cloud/text-to-speech";

const client = new textToSpeech.TextToSpeechClient({
  apiEndpoint: "us-central1-texttospeech.googleapis.com",
});

export const convertToSpeech = async (text: string) => {
  const [response] = await client.synthesizeSpeech({
    input: { ssml: `<speak>${text}</speak>` },
    voice: {
      languageCode: "en-US",
      ssmlGender: "FEMALE",
      name: "en-US-Standard-G",
    },
    audioConfig: { audioEncoding: "MP3" },
  });
  if (!response.audioContent) {
    throw new Error("No audio content in response");
  }
  return response.audioContent;
};
