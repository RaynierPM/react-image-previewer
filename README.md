# Nidea React Image Viewer

The React wrapper simplifies integration by providing context-based API access.

This wrapper is based on this [package](https://npmjs.com/package/nidea-image-previewer-core).

### Usage

```jsx
import ImagePreviewer from "nidea-image-previewer-core/react";

export default function App() {
  return (
    <ImagePreviewer width={500} height={400}>
      <ImagePreviewer.ImageInput>
        {({ onChangeFile }) => <input type="file" onChange={onChangeFile} />}
      </ImagePreviewer.ImageInput>
      <ImagePreviewer.DownloadButton>
        {({ onDownload }) => <button onClick={onDownload}>Download</button>}
      </ImagePreviewer.DownloadButton>
      <ImagePreviewer.ProcessBlobButton>
        {({ getBlob }) => (
          <button
            onClick={async () => {
              const file = await getBlob(); // Blob | undefined
              // Do some stuff
            }}
          >
            Make some stuff
          </button>
        )}
      </ImagePreviewer.ProcessBlobButton>
    </ImagePreviewer>
  );
}
```

### Example

Let's test it [here](https://nidea-image-previewer.netlify.app/).

### Components

- `<ImagePreviewer>`: Main wrapper component.
- `<ImagePreviewer.ImageInput>`: Handles file selection.
- `<ImagePreviewer.ProcessBlobButton>`: Provides access to the image blob.
- `<ImagePreviewer.DownloadButton>`: Enables image downloading.

## License

This project is licensed under the MIT License. Use it, break it, improve it!
