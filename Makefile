init:
	npm install
	npm install -g yalc

push:
	npm run build
	cd dist/hello && yalc push