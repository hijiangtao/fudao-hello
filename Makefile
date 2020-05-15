init:
	npm install
	npm install -g yalc nodemon

push:
	npm run build
	cd dist/hello && yalc push

watch:
	nodemon --ignore dist/ --ignore node_modules/ --watch projects -C -e ts,html,less,scss --debug -x "npm run build && cd dist/hello && yalc push"