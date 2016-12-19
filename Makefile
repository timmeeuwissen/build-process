.PHONY: all clean get-deps build build-js build-css test tdd bdd

all: get-deps build

clean:
	-rm public/css/*.css
	-rm public/js/*.js
	-find ts/ -name "*.js" -type f -delete

get-deps: 
	npm i 
	node_modules/.bin/bower i
	node_modules/.bin/typings i
	sudo gem install sass-json-vars

build: build-js build-css
build-js: 
	node_modules/.bin/browserify -p [ tsify --target es3 ] ts/app.ts \
		| java -jar node_modules/google-closure-compiler/compiler.jar --create_source_map public/js/app.map --source_map_format=V3 --js_output_file public/js/app.js
build-css:
	helpers/build_css.sh sass public/css

serve: 
	node_modules/.bin/static-server -i index.htm public 

test:
	node_modules/.bin/karma start --single-run
	node_modules/.bin/chimp chimp.conf.js --chrome

tdd:
	node_modules/.bin/karma start

bdd:
	node_modules/.bin/chimp chimp.conf.js --watch
