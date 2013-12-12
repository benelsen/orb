
all: orb.js orb.min.js pkgjson

.PHONY: clean all test jshint complex

test: orb.js
	@npm test

jshint: orb.js
	node_modules/.bin/jshint orb.js

orb.js: $(shell node_modules/.bin/smash --list src/orb.js)
	@rm -f $@
	node_modules/.bin/smash src/orb.js | node_modules/.bin/uglifyjs - --beautify indent-level=2 --output $@
	@chmod a-w $@

orb.min.js: orb.js
	@rm -f $@
	node_modules/.bin/uglifyjs $< --compress --mangle --output $@ --source-map $@.map

pkgjson: orb.js
	node pkgjson.js

complex:
	node_modules/.bin/cr orb.js

clean:
	rm -f orb*.js
