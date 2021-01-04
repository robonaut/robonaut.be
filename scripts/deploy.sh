# js and css
aws s3 sync ./dist s3://www.robonaut.be --region eu-central-1 --metadata-directive REPLACE --acl public-read  --exclude "*" --include "*.js" --include "*.css" --cache-control max-age=31536000,public
# html files
aws s3 sync ./dist s3://www.robonaut.be --region eu-central-1 --metadata-directive REPLACE --acl public-read  --exclude "*" --include "*.html" --cache-control max-age=60,public
# assets
aws s3 sync ./dist s3://www.robonaut.be --region eu-central-1 --metadata-directive REPLACE --acl public-read  --include "*" --exclude "*.js" --exclude "*.css" --exclude "*.html" --cache-control max-age=31536000,public
