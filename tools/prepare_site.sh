#!/usr/bin/env bash
set -euo pipefail                    # stop on first error

# 1. fresh staging folder
rm -rf site
mkdir  -p site

# 2. copy ONLY what the browser must fetch
cp -r build/potree            site/build            # potree.js, potree.css, workers/ …
cp -r libs                    site/
cp -r models resources        site/
cp -r thumbnails              site/
cp    index.html              site/

# 3. sanity check – list the big boys
echo "------ staged files ----------"
ls -lh site/build/potree/potree.js site/build/potree/potree.css
echo "------------------------------"