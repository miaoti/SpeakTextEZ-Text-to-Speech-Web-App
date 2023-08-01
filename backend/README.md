# SpeakTextEZ-Text-to-Speech-Web-App backend

This is a simple application that is able to use ocr and tts. Both are using Google Cloud Platform services, Cloud Vision API for ocr and Cloud Text-to-Speech API for tts.

## Requirements

Software:

```
node: 16
npm: 9
```

Google cloud project with Cloud Vision API and Cloud Text-to-Speech API enabled.

## Local dev

Need to set a way to authenticate to google cloud. Read the [doc](https://cloud.google.com/docs/authentication/application-default-credentials) for more information. The easiest and recommended way is to have access to the project with your user account and run `gcloud auth application-default login`. Once the credentials are set running the following command start the project.

```bash
npm run dev
```

## Input

The input is an image that was encoded with `multipart/form-data`, the file need to be a valid image and contain some english text. This snippet could do the job:

```html
<form
  action="http://localhost:3000/ocr"
  method="post"
  enctype="multipart/form-data"
>
  <input type="file" name="image" />
  <button type="submit">Upload</button>
</form>
```

## Output

The output is a mp3 file that is returned to the browser, a blob url can be created from it and reproduce it using a regular html5 audio tag.
