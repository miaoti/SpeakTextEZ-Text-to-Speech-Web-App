import vision from "@google-cloud/vision";

const client = new vision.ImageAnnotatorClient({
  apiEndpoint: "us-vision.googleapis.com",
});

export const detectText = async (image: Buffer): Promise<string> => {
  const [result] = await client.textDetection(image);
  const detections = result.textAnnotations;
  const text = detections?.map((text) => text.description).join("");
  if (!text) {
    throw new Error("No text detected");
  }
  return text;
};
