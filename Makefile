
build: index.js orb.js orb.min.js

.PHONY: build test jshint complex

test: index.js
	@npm test

jshint:
	node_modules/.bin/jshint src/

orb.js: index.js
	@rm -f $@
	node_modules/.bin/browserify index.js --standalone orb -o dist/$@

orb.min.js: orb.js
	@rm -f $@ $@.map
	node_modules/.bin/uglifyjs dist/$< --compress unused=false --mangle --output dist/$@ --source-map dist/$@.map

complex:
	node_modules/.bin/cr orb.js
