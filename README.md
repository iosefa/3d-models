# 3d-models
Examples of 3D models created from photogrammetry techniques.

## Deployment

The repository is designed to be hosted on S3 behind CloudFront.
The GitHub Actions workflow builds the Potree viewer and uploads the
site automatically.

1. Install dependencies and build:

   ```bash
   npm ci
   npm run build        # optional when using the CDN build
   ```

2. Sync the contents of this repository to your S3 bucket.
   The `main.yml` workflow performs these steps and purges CloudFront
   after each push to `main`.

### CORS configuration

Point cloud data lives in a separate public bucket. Ensure that bucket
allows cross‑origin requests so the viewer can fetch `ept.json` and
tiles from the browser.
