.PHONY: build gzip gzipHtml gzipJS gzipCSS deploy

build:
	npm run build
	# make -s gzip

gzip:
	make gzipHTML
	make gzipJS
	make gzipCSS

gzipHTML:
	for i in `find dist -name "*.html" -type f`; do \
		gzip $$i; \
		echo $$i.gz; \
		mv $$i.gz $$i; \
	done

gzipJS:
	for i in `find dist -name "*.js" -type f`; do \
		gzip $$i; \
		echo $$i.gz; \
		mv $$i.gz $$i; \
	done

gzipCSS:
	for i in `find dist -name "*.css" -type f`; do \
		gzip $$i; \
		echo $$i.gz; \
		mv $$i.gz $$i; \
	done

deploy:
	# js and css
	aws s3 sync ./dist s3://www.robonaut.be --region eu-central-1 --metadata-directive REPLACE --acl public-read  --exclude "*" --include "*.js" --include "*.css" --cache-control max-age=31536000,public
	# html files
	aws s3 sync ./dist s3://www.robonaut.be --region eu-central-1 --metadata-directive REPLACE --acl public-read  --exclude "*" --include "*.html" --cache-control max-age=60,public
	# assets
	aws s3 sync ./dist s3://www.robonaut.be --region eu-central-1 --metadata-directive REPLACE --acl public-read  --include "*" --exclude "*.js" --exclude "*.css" --exclude "*.html" --cache-control max-age=31536000,public
