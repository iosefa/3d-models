# 3d-models
Examples of 3D models created from photogrammetry techniques.

## Building

The viewer uses a custom Potree build. Run the following commands to generate
the `build/` directory used by the HTML pages:

```bash
npm install
npm run build
```

## Deployment

The repository is designed to be served as static files (e.g. from an S3
bucket). After running the build step, sync the repository to your bucket so
that the `build/` folder and model pages are uploaded. The bucket hosting the
EPT point cloud data must allow CORS requests from the viewer domain.
